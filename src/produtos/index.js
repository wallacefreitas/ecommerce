import React, {Component} from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import { yellow400 } from 'material-ui/styles/colors';
import { formatMoney } from '../util/helper';
import ShoppinCartIcon from 'material-ui/svg-icons/action/shopping-cart';
import RaisedButton from 'material-ui/RaisedButton';
import { bindActionCreators } from 'redux';
import { add , get } from '../components/carrinhoCompras/actions'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

let style = {
    cardProdutos: {
        position:'relative',
        verticalAlign: 'middle',
        color: '#0b7',
        display: 'inline-block',
        lineHeight: '60px',
        textAlign: 'center',
        transition: '0.5s',
        padding: '0 20px',
        cursor: 'pointer',
        webkitTransition:'0.5s',
        float:"left", 
        width:"185px", 
        height:"259px", 
        margin:"20px",
        border: '2px solid #BDBDBD'
    }
}
class Produtos extends Component {
    constructor(props){
        super(props);

        this.state = {
            produtos: [],
        }

        this.handlerMouseEnter = this.handlerMouseEnter.bind(this);
    }

    componentDidMount(){
        //Variáveis
        let main = this;

        fetch('http://localhost:3003/api/produto')
        .then((response) => {
            response.json().then(function(produto) {
                main.setState({produtos: produto});
            });
        })
        .catch((e) => {
            console.log(e);
        });
    }

    abrirDetalhesProduto(produto){
        //this.props.history.push('/produto/'+produto_id);

        this.props.add(produto)
        this.props.get();

    }

    handlerMouseEnter(){
        //this.state.cardProdutos.border = "2px solid #00C853";
    }

    render(){
        //Variáveis
        let main = this;

        return(
            <Card>
                <CardTitle title="Produtos" subtitle="Lista de Produtos" />
                <div style={{width: "100%"}}>
                    {main.state.produtos.map(function(produto,idx){
                        return (
                            <div key={idx} style= {{border:'1px solid #BDBDBD'}}>
                                <ListItem 
                                    key={produto.id} 
                                    primaryText={produto.nome} 
                                    secondaryText={'R$ '+formatMoney(produto.preco)}  
                                    leftAvatar={<Avatar src={produto.thumbnail} size={50} />}
                                    rightIcon={<RaisedButton style={{ height: "40px" }} icon={<ShoppinCartIcon style={{ marginTop: '8px' }} />} secondary={true} onClick={() => main.abrirDetalhesProduto(produto)}/>}
                                    onClick={false}
                                    style={{backgroundColor: (idx % 2 == 0 ? "#F5F5F5" : "#B2DFDB")}}
                                />
                            </div>
                        );
                    })}
                </div>
            </Card> 
        );
    }
}
const mapStateToProps = (state)=>{
    return {
        items: state.carrinhoCompras.items
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    add,
    get 
},dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Produtos));