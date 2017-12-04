import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import { mascarar, tamanhoValidoCel,tamanhoValidoTel, tipoMascara } from '../../util/helper'


class MaskedInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valor: mascarar(this.props.value, this.props.mascara),
        };
    }
    //Regras de Controle
    handleChange = (event,mask) => {

        if(event.which === 8) return false
        if( 'tel' === tipoMascara(mask) && !tamanhoValidoTel(event.target.value) ) return false;
        else if( 'cel' === tipoMascara(mask) && !tamanhoValidoCel(event.target.value) ) return false;

        let valor = ( tipoMascara(mask) === "tel" ? event.target.value.replace("_","") : event.target.value );
        this.setState({
            valor:valor
        })
    }

    //Somente executa a mascara
    keyPress(event,mask){
        //Verifica se o apagar está sendo pressionado
        if(event.which === 8) return false

        //Aplica a mascara
        let valor = mascarar(event.target.value, mask);
 
        //Seta no input a mascara.
        event.target.value = valor;

    }

    render() {
        return (
            <div>
                <TextField
                    id={this.props.id}
                    floatingLabelText={this.props.titulo}
                    name={this.props.name}
                    value={ this.state.valor }
                    onChange={(event) => this.handleChange(event, this.props.mascara )}
                    onKeyUp={(event) => this.keyPress(event,this.props.mascara)}
                />
            </div>
        );
    }
}


export default MaskedInput;
