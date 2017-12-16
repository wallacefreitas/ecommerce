import React, { Component } from 'react'
import Header from './template/header.js'
import Body from './template/body.js'
import Footer from './template/footer.js'
// import { consultarCarrinho } from './template/behaviour'
import CarrinhoCompra from './components/carrinhoCompras/index';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux';


class Layout extends Component {
    constructor(props){
        super(props);
    }
    
    componentDidMount(){
        
    }
    render(){

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

    }
) 

const mapStateToProps = (state) => (
    {

    }
)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));