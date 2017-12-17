import React, { Component } from 'react'
import { Card , CardHeader , CardText} from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import IconDelete from 'material-ui/svg-icons/action/delete';
import IconEdit from 'material-ui/svg-icons/content/create';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import { editar, excluir } from './eventos';
import { get , add , remover  } from './actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ShoppingBasket from 'material-ui/svg-icons/action/shopping-basket'
import Badge from 'material-ui/Badge';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';



class CarrinhoCompra extends Component{
    componentDidMount(){
        this.props.get();

    }
    renderItems(){
        let items = this.props.items || [];
        let main = this;

        if(items.length == 0 )
            return <div>Nenhum produto foi adicionado para o carrinho.</div>
        
        return items
        .map((item, idx) => {
            return (
                <ListItem key={idx}
                    primaryText={`${item.nome} - R$ ${item.preco} - [${idx}]`}
                    leftAvatar={<Avatar src={item.imagem} />}
                    rightIcon={
                        <div style={{ width: '120px', top:'-8px' }}>
                            <IconButton onClick={()=>{
                                excluir(main.props, idx)
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

    calcularTotal(){
        let items = this.props.items || [];

        if(items.length == 0)
            return 0;

        return items
            .map((item)=>{
                return item.preco
            })
            .reduce((valorAnterior, valorAtual)=>{
                return valorAnterior + valorAtual
            })
    }
    render(){
        return (
            <div>
                <br/>
                <Card>
                    <CardHeader
                        title={
                            <div>
                                <span>
                                Carrinho de Compras
                                </span>
                                &nbsp;
                                &nbsp;
                                <Badge
                                    badgeContent={(this.props.items ? this.props.items.length : 0)}
                                    primary={true}
                                    style={{display:'block', float:'right'}}
                                />
                            
                            </div>
                        }
                        subtitle="Items"
                        avatar={
                            
                                <ShoppingBasket/>
                           
                        }
                        actAsExpander={true}
                        showExpandableButton={true}
                    />
                    <CardText expandable={true}> 
                       {this.renderItems()}

                        <ListItem 
                            primaryText={`Total:`}
                            rightIcon={
                                <div style={{ width: '250px', 'display': 'block', textAlign:'right'}}>
                                    <label >
                                        R$ {(this.calcularTotal()).toFixed(2).replace('.',',')}
                                    </label>
                                </div>
                            }
                        />
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
    add,
    remover
},dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CarrinhoCompra));