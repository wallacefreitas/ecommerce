import React, {Component} from 'react';
import { List, ListItem } from 'material-ui/List';
import { Card, CardTitle } from 'material-ui/Card';
import { formatDate } from '../util/helper';
import EtapasUI from '../components/forms/etapasUI';

class Pedidos extends Component {
    constructor(props){
        super(props);

        this.state = {
            pedidos: [],
        }
    }

    componentDidMount(){
        //Variáveis
        let main = this;
        
        fetch('http://localhost:3003/api/pedido')
            .then((response) => {
                response.json().then(function(pedido){
                    main.setState({pedidos: pedido});
                });
            });
    }

    render(){
        //Variáveis
        let main = this;
        
        return(
            <div style={{width: '100%', position: 'absolute'}}>
                <Card>
                    <CardTitle title="Meus Pedidos" subtitle="Último Pedido Realizado" />
                    <EtapasUI />
                </Card>
                {/*<div style={{marginTop:'20px'}}>
                    <Card>
                        <CardTitle title="Histórico de Pedidos" subtitle="Últimos Pedidos Realizados" />
                        <List>
                            {main.state.pedidos.map(function(pedido, idx){
                                return <ListItem key={idx} primaryText={pedido.codigo+'-'+formatDate(pedido.data_venda)} />
                            })}
                        </List>
                    </Card>
                </div>
                        */}
            </div>
        );
    }
}

export default Pedidos;