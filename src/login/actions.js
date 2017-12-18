import { VALIDATION } from "../util/enum";
import Message from '../components/messages'
import { set, clear } from '../system/sessao/actions'
import { initialize } from "redux-form";

const INITIAL_VALUES = { login: '', password: ''}

export function init(form = null){
    return dispatch => {
        dispatch([  initialize('loginForm', INITIAL_VALUES )]);
    }
   
}

export function login(values){
    return submit(values)
} 

export function logout(){
    return dispatch => (dispatch([ clear() ]));
}

function submit(values){
    return dispatch =>{
        var form = new URLSearchParams();
        form.append('login', btoa(values.login || ''));
        form.append('password', btoa(values.password || ''));

        if(
            values.login == "admin" &&
            values.password == "admin"
        ){
            return dispatch([
                set({
                    id:1,
                    nome:'Aylon Muramatsu',
                }),
                Message(VALIDATION.SUCCESS, "Login realizado com sucesso!")
            ])
        }
        else{
            Message(VALIDATION.ERROR, "Usuario/Senha incorretos");
            
        }
        
        /*fetch(
            'login',
            form
        )
        .then( resp => {
            
            Message(VALIDATION.SUCCESS, "Login realizado com sucesso!");
        
        })
        .catch( (errors) => {
            if( errors instanceof Array && errors.length > 0){
                errors.forEach(
                    (error) => {               
                        Message(VALIDATION.ERROR, error);
                    }
                );
            }

            else{
                Message(VALIDATION.ERROR, "Por favor verifique sua conexão");
            }
        })*/
    }
}