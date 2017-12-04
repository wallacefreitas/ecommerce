import React, {Component} from 'react';
import { Card, CardTitle, CardMedia } from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { formatMoney } from '../util/helper';
import { withRouter } from 'react-router-dom'
import ShoppinCartIcon from 'material-ui/svg-icons/action/shopping-cart';
import AddIcon from 'material-ui/svg-icons/content/add-circle';
import RemoveIcon from 'material-ui/svg-icons/content/remove-circle';

//Constantes
const SEM_IMAGEM = 'http://127.0.0.1:3003/api/uploads/sem_imagem.jpg';

class ProdutoDetalhes extends Component {
    constructor(props){
        super(props);

        this.state = {
            produto: {},
            quantidade: 0,
            total_produto: 0.0
        }

        //Métodos
        this.adicionarItem = this.adicionarItem.bind(this);
        //this.adicionarCarrinho = this.adicionarCarrinho.bind(this);
        console.log(this.props)
        this.removerItem = this.removerItem.bind(this);
    }

    componentDidMount(){
        //Variáveis
        let main = this;
        
        fetch('http://localhost:3003/api'+this.props.location.pathname)
        .then((response) => {
            response.json().then(function(produto) {
                main.setState({produto: produto});
            });
        })
        .catch((e) => {
            console.log(e);
        });
    }

    adicionarItem(){
        let qtd = this.state.quantidade + 1;
        let total = this.state.produto.preco * qtd;

        this.setState({quantidade: qtd, total_produto: total});
    }

    removerItem(){
        let qtd = this.state.quantidade - 1;
        let total = this.state.produto.preco * qtd;

        if(qtd >= 0){
            this.setState({quantidade: qtd, total_produto: total});  
        }
    }

    adicionarCarrinho(produto){
        console.log(produto);
        fetch('http://localhost:3003/api/pedido_item',
        {
            method: "POST",
            body: produto    
        })
        .then((response) => {
            console.log(response);
        })
        .catch((e) => {
            console.log(e);
        });     
    }

    render(){
        return(
            <div style={{width: '100%'}}>
                <Card style={{position: "absolute", width:'100%'}}>
                    <div style={{float: 'left'}}>
                        <CardMedia
                            expandable={true}
                            overlay={<CardTitle title={this.state.produto.nome} subtitle={this.state.produto.descricao} />}
                        >
                            
                            <img 
                                src={(this.state.produto.imagem == "" ? SEM_IMAGEM : this.state.produto.imagem)} 
                                style={{width:'100%'}} 
                                width={500}
                                height={500}
                            />
                        </CardMedia>
                    </div>
                    <div style={{float:'left', width:'40%'}}>
                        <CardTitle title={this.state.produto.nome} subtitle={this.state.produto.descricao} />
                        <div style={{marginLeft:"1px", width:"100%"}}>
                            <div style={{marginLeft:'15px'}}>
                                <span style={{fontSize:"20px"}}>R$ </span>
                                <span style={{fontWeight:"bold", color:"#D50000", fontSize:"20px"}}>
                                    {formatMoney(this.state.produto.preco)}
                                </span>
                            </div>
                            <div style={{position:"relative", width:"100%"}}>
                                <div style={{marginLeft:'15px', marginTop: '12px'}}>
                                    <AddIcon style={{color:"#00C853"}} onClick={this.adicionarItem.bind(this)} />
                                    <span style={{fontWeight:'bold'}}>{this.state.quantidade}</span>
                                    <RemoveIcon style={{color:"#F44336"}} onClick={this.removerItem.bind(this)} />
                                </div>
                            </div>
                        </div>
                        <div style={{float:"left", width:"100%", marginLeft:'15px'}}>
                            <TextField hintText="00000-000" floatingLabelText="Informe o CEP" /> <br />
                            <RaisedButton 
                                label="Calcular Frete"
                                primary={true} 
                            />
                        </div>
                        <br /> <br />
                        <div style={{marginLeft: '15px', marginTop:'90px'}}>
                            <RaisedButton 
                                icon={<ShoppinCartIcon />} 
                                secondary={true} 
                                style={{width: '30%'}}
                                onClick={this.adicionarCarrinho.bind(this, this.state.produto)} 
                            />
                        </div>
                        <div style={{marginLeft:'15px', marginTop: '30px'}}>
                            Total: <span style={{fontWeight:'bold', color:"#43A047"}}>{'R$ '+formatMoney(this.state.total_produto)}</span>
                        </div>
                    </div>
                </Card>
            </div>
        );
    }
}

export default withRouter(ProdutoDetalhes);