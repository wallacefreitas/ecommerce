import React from 'react'
import Layout from './layout';

//Componentes de cada Rota
import Estabelecimentos from './estabelecimentos/index';

import Produtos from './produtos/index';
import ProdutoDetalhes from './produtos/detalhes';
import Consumidores from './consumidores/index';
import Pedidos from './pedidos/index';

import {
    Route,
    Switch
} from 'react-router-dom';

import {
    ConnectedRouter
} from 'react-router-redux'

export default (props) => {
    return (
    <ConnectedRouter history={ props.history }>
        <Layout>
            <Switch>
            <Route exact path="/" component={Estabelecimentos} />
            <Route exact path="/produtos" component={Produtos} />
            <Route exact path="/produto/:id" component={ProdutoDetalhes} />
            <Route exact path="/perfil" component={Consumidores} />
            <Route exact path="/pedidos" component={Pedidos} />
            </Switch>
        </Layout>
    </ConnectedRouter>
    )
}

/***
   
                 
 */