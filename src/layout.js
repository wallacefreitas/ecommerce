import React, { Component } from 'react'
import Header from './template/header.js'
import Body from './template/body.js'
import Footer from './template/footer.js'
// import { consultarCarrinho } from './template/behaviour'
import CarrinhoCompra from './classes/CarrinhoCompra';
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
                teste
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