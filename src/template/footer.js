import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';

//Icones
import IconLocalizacao from 'material-ui/svg-icons/communication/location-on';
import IconPerfil from 'material-ui/svg-icons/action/perm-identity';
import IconMeusPedidos from 'material-ui/svg-icons/action/assignment';
import IconProdutos from 'material-ui/svg-icons/action/redeem';

const style = {
    bottom: 0,
    position: 'fixed',
    zIndex: 99,
    width: '100%'
}

class Footer extends Component {
    constructor(props){
        super(props);

        this.state = {
			open: false    
        };
    }

    abrirProdutos() {
        this.props.history.push('/produtos')
    }

    abrirEstabelecimentos() {
        this.props.history.push('/')
    }

    abrirPerfil() {
        this.props.history.push('/perfil')
    }

    abrirPedidos() {
        this.props.history.push('/pedidos')
    }


    selecionarRotaAtual(){
        //Variáveis
        let path = "/";

        if(this.props.history)
        if(this.props.history.location)
            path = this.props.history.location.pathname;

        switch(path){
            case '/':
                //Pagina Inicial
                return 0;
            case '/produtos':
                //Produtos
                return 1;
            case '/pedidos':
                //Perfil
                return 2;
            case '/perfil':
                //Perfil
                return 3;
            default:
                //Não sei, via das dúvidas volte para a inicial
                return 0;
        }
        //Não sei, via das dúvidas volte para a inicial
        return 0;
    }
    render() {
        return (
            <Paper zDepth={1} style={style}>
                <BottomNavigation selectedIndex={this.selecionarRotaAtual()}>
                    <BottomNavigationItem
                        label="Locais"
                        icon={<IconLocalizacao />}
                        onClick={() => this.abrirEstabelecimentos()}
                    />
                    <BottomNavigationItem
                        label="Produtos"
                        icon={<IconProdutos />}
                        onClick={() => this.abrirProdutos()}
                    />
                    <BottomNavigationItem
                        label="Pedidos"
                        icon={<IconMeusPedidos />}
                        onClick={() => this.abrirPedidos()}
                    />
                    <BottomNavigationItem
                        label="Perfil"
                        icon={<IconPerfil />}
                        onClick={() => this.abrirPerfil()}
                    />
                </BottomNavigation>
            </Paper>
        );
    }
}

export default withRouter(Footer);