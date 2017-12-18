import React, { Component } from 'react'
import Header from './template/header.js'
import Body from './template/body.js'
import Footer from './template/footer.js'
// import { consultarCarrinho } from './template/behaviour'
import CarrinhoCompra from './components/carrinhoCompras/index';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { set } from './system/sessao/actions'
import Login from './login/index'

class Layout extends Component {
    constructor(props){
        super(props);
    }
    
    componentDidMount(){
       /* console.log(this.props.sessao)
        let main = this;
        setTimeout(function(){
            main.props.set({
                id: 1,
                nome:'Aylon Muramatsu',
            })
        }, 10000)*/
    }
    render(){
        if(this.props.sessao == null) 
            return (
                <Login/>
            )
        else 
        return (
            <div>
                <Header/>
                <CarrinhoCompra/>
                <Body>
                    {this.props.children}
                </Body>
                <Footer/>
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        set 
    },dispatch
) 

const mapStateToProps = (state) => (
    {
        sessao: state.sessao
    }
)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));