import React, { Component } from 'react'
import { Card , CardHeader , CardText} from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import IconDelete from 'material-ui/svg-icons/action/delete';
import IconEdit from 'material-ui/svg-icons/content/create';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import { editar, excluir } from './eventos';
import { get , add  } from './actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class CarrinhoCompra extends Component{
    componentDidMount(){
        this.props.get();

    }
    renderItems(){
        let items = this.props.items || [];

        if(items.length == 0 )
            return <div>Nenhum produto foi adicionado para o carrinho.</div>

        return items.map((item) => {
            return (
                <ListItem key={item.id}
                    primaryText={item.nome}
                    leftAvatar={<Avatar src={item.imagem} />}
                    rightIcon={
                        <div style={{ width: '120px', top:'-8px' }}>
                            <IconButton onClick={()=>{
                                excluir(item.id)
                                
                            }}>
                                <IconDelete style={{ float: 'right', margin: '0 5px' }} /> 
                            </IconButton>

                            <IconButton onClick={() => { 
                                editar();
                            }}>
                                <IconEdit style={{ float: 'right' }} />
                            </IconButton>
                        </div>
                    }
                />
            )
        })
    }
    render(){
        return (
            <div>
                <Card>
                    <CardHeader
                        title="Carrinho de Compras"
                        subtitle="Items"
                    />
                    <CardText>
                       {this.renderItems()}
                    </CardText>
                </Card>
                <br/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.carrinhoCompras.items
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    get, 
    add
},dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CarrinhoCompra));