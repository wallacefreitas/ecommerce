import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import MaskedInput from '../components/forms/maskedInput'
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import {Tabs, Tab} from 'material-ui/Tabs';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import IconEndereco from 'material-ui/svg-icons/action/store';
import {cyan500, fullWhite} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import IconConfirmar from 'material-ui/svg-icons/action/done';
import IconCancelar from 'material-ui/svg-icons/navigation/cancel';
import ImageInput from '../components/forms/imageInput';
import MessageDialog from '../components/forms/messageDialog';
import Snackbar from 'material-ui/Snackbar';
import IconEmail from 'material-ui/svg-icons/communication/mail-outline';

const styles = {
    button: {
        margin: 12,
    },
    imageInput: {
        cursor: 'pointer',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        width: '100%',
        opacity: 0,
    },
    avatar: {
        margin: 'auto',
        display: 'block',
        width: '100%',
        textAlign: 'center',
        marginTop: '20px',
    },
    uploadButton: {
        margin: 'auto',
        display: 'block',
        width: '100%',
        textAlign: 'center',
        marginTop: '3px',
    }
};
  
const salvar = (event, component) => {
    event.preventDefault();
    let form = new FormData(event.target);

    if(component.state.nome === ""){
        component.setState({ modal:true });

        setTimeout(() => {
            component.setState({ modal: false });
        },3000);
    } else {
        fetch("http://localhost:3003/api/consumidor/1", {
            method: "PUT",
            body: form
        }).then((response) => {
            component.setState({mensagem_informativa: true});
            setTimeout(()=>{
                component.setState({ mensagem_informativa: false });
            },2000)

            if(component.state.mensagem_informativa){
                component.listarDadosConsumidor();
            }
        });
    }
}
    
class Consumidores extends Component {
    constructor(props){
        super(props);

        this.state = {
            nome: '',
            email: '',
            telefone: '',
            celular: '',
            imagem: '',
            endereco: '',
            bairro: '',
            numero: 0,
            cep: 0,
            senha: '',
            modal: false,
            mensagem_informativa: false
        }

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        this.listarDadosConsumidor();
    }

    listarDadosConsumidor(){
        //Variáveis
        let main = this;
        let id = 1;
        
        fetch(`http://localhost:3003/api/consumidor/${id}`)
        .then((response) => {
            response.json().then(function(consumidor) {
                main.setState({
                    nome: consumidor.nome,
                    email: consumidor.email,
                    telefone: consumidor.telefone,
                    endereco: consumidor.endereco,
                    bairro: consumidor.bairro,
                    numero: consumidor.numero,
                    cep: consumidor.cep,
                    senha: consumidor.senha,
                    imagem: 'http://127.0.0.1:3003/api/uploads/'+consumidor.imagem
            
                });
            });
        })
        .catch((e) => {
            console.log(e);
        });
    }

    handleChange = (e) => {
        //this.setState({nome: e.target.value});
        this.refs.email.value = e.target.value;
    }

    handleChangeNome = (event) => {
        this.setState({
          nome: event.target.value,
        });
    };
    

    render(){
        return(
            <div style={{width:'100%'}}>
                <form onSubmit={ (evt)=> salvar(evt, this) }>
                    <Card>
                        <CardTitle title="Meu Perfil" subtitle="Editar Dados" />
                        <CardText>
                            <Tabs style={{color: cyan500}}>
                                <Tab
                                    icon={<MapsPersonPin />}
                                    label="DADOS"
                                >
                                    <Card>
                                        <div style={{width: '100%', backgroundColor: "#B2DFDB"}}>
                                            <div style={styles.uploadButton}>
                                            <CardActions>
                                                <ImageInput image={this.state.imagem} />
                                            </CardActions>
                                            </div>
                                        </div>

                                        <div style={{width: '90%', marginLeft: '20px'}}>
                                            <TextField id="edt_nome" name="nome" floatingLabelText="Nome" value={this.state.nome} onChange={this.handleChangeNome} fullWidth /><br />
                                            <TextField id="edt_email" name="email" floatingLabelText="Email" ref="email" value={this.state.email} /><br />
                                            <MaskedInput name="telefone" mascara="(XX) XXXX-XXXX" id="edt_telefone" titulo="Telefone" value={this.state.telefone} />
                                            <MaskedInput name="celular" mascara="(XX) XXXXX-XXXX" id="edt_celular" titulo="Celular" value={this.state.celular} />
                                        </div>
                                    </Card>
                                </Tab>
                                <Tab
                                    icon={<IconEndereco />}
                                    label="ENDEREÇO"
                                >
                                    <Card>
                                        <div style={{width: '90%', marginLeft: '20px'}}>
                                            <TextField id="edt_cep" name="cep" floatingLabelText="CEP" value={this.state.cep}  /><br />
                                            <TextField id="edt_endereco" name="endereco" floatingLabelText="Endereço" value={this.state.endereco}  fullWidth /><br />
                                            <TextField id="edt_bairro" name="bairro" floatingLabelText="Bairro" value={this.state.bairro} />
                                            <TextField id="edt_numero" name="numero" floatingLabelText="N.º" value={this.state.numero} /><br />
                                        </div>
                                    </Card>
                                </Tab>
                                <Tab
                                    icon={<IconEmail />}
                                    label="CONTA"
                                >
                                    <Card>
                                        <div style={{width: '90%', marginLeft: '20px'}}>
                                            <TextField id="edt_email" name="email" floatingLabelText="Email" value={this.state.email} fullWidth /><br />
                                            <TextField id="edt_senha" name="senha" floatingLabelText="Senha" value={this.state.senha}  /><br />
                                        </div>
                                    </Card>
                                </Tab>
                            </Tabs>
                            <Card>
                                <CardActions style={{width: '100%', textAlign: 'center'}}>
                                    <RaisedButton backgroundColor="#a4c639" type="submit" icon={<IconConfirmar color={fullWhite}/>} />
                                    <RaisedButton backgroundColor="#E53935"  icon={<IconCancelar color={fullWhite}/>} />
                                </CardActions>
                            </Card>
                        </CardText>
                    </Card>            
                </form>
                <MessageDialog 
                    titulo="Aviso!"
                    mensagem="Por favor, verifique os campos."
                    open={this.state.modal}
                />
                <Snackbar
                    open={this.state.mensagem_informativa}
                    message="Dados atualizados com sucesso!"
                    autoHideDuration={4000}
                    onRequestClose={this.handleRequestClose}
                />
            </div>
        );
    }
}

export default Consumidores;