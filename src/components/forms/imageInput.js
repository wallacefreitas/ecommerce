import React, {Component} from 'react';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import Main from '../../util/layout_padrao';

const carregarFoto = (event, target)=> {
    target.click();
}

const renderizarFoto = (event, component)=>{
    let file = (event.target.files.length > 0 ? event.target.files[0] : null);
    if(file == null) return;
    //Crio o componente de leitura
    var reader = new FileReader();

    //Atribuo o evento que vai rodar quando a leitura estiver concluida
    reader.onload = (e)=>{
        //Atualiza o state do componente com o valor lido pelo componente de leitura
        component.setState({ src: e.target.result });
    }

    //Executa a leitura do arquivo
    reader.readAsDataURL(file);

}

class ImageInput extends Component {
    constructor(){
        super();
        this.state = { src: "http://neoleader.com.br/wp-content/uploads/2015/05/geral_adulto-300x300.png" }
    }
    render(){
        return(
            <div>
                <div>
                    <FlatButton style={Main.ImageInput.FlatButton} onClick={(event) => carregarFoto(event, this.inputFile)} >
                        <Avatar size={Main.ImageInput.Avatar.config.size} src={ this.props.image || this.state.src || "" }/>
                        <input 
                            type="file" 
                            style={Main.ImageInput.InputFile} 
                            ref={(input) => this.inputFile =  input } 
                            onChange={(event) => renderizarFoto(event, this)}
                            name="imagem"
                        />                        
                    </FlatButton>
                </div>
            </div>
        );
    }
}

export default ImageInput;