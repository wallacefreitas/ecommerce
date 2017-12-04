export const API_KEY = 'AIzaSyBCQiofsWoI_pbBqP-LNWkWkIrKJ7M9O_w';
export const URL_CORS = 'https://cors-anywhere.herokuapp.com/';

export const mascarar = (value,mask)=>{
    var mascara= "";
    switch(mask){
        //Telefone
        case '(XX) XXXX-XXXX':
            mascara = "(__) ____-____";
            value = value.replace(/[_]|\(|\)\ |\-/g,"");
 
            for(var casa in value){
                if(value.length <= 10)
                    if(value[casa] !== "_" && value[casa] !== "(" && value[casa] !== ")" && value[casa] !== "-")
                        mascara = mascara.replace("_", value[casa]); 
            }       

            return mascara;

        //Celular
        case '(XX) XXXXX-XXXX':
            mascara = "(__) _____-____";
            value = value.replace(/[_]|\(|\)\ |\-/g,"")
            for(var casa in value){
                if(value.length <= 12)
                    if(value[casa] !== "_" && value[casa] !== "(" && value[casa] !== ")" && value[casa] !== "-")
                
                    mascara = mascara.replace("_", value[casa]); 
            }              
            return mascara;

        default:
            return '';
    }
}

export const somenteNumeroTelefone = (valor)=>{
    return valor.replace(/[_]|\(|\)\ |\-/g,"")
}

export const tamanhoValidoTel = (valor) => {
    return somenteNumeroTelefone(valor).length <= 10
}

export const tamanhoValidoCel = (valor) => {
    return somenteNumeroTelefone(valor).length <= 12
}

export const tipoMascara = (mask) => {
    switch(mask){
        case '(XX) XXXXX-XXXX':
            return 'cel'
        case '(XX) XXXX-XXXX':
            return 'tel'

        default:
            return 'text'
    }
}

export const formatMoney = (valor) => {
    return Number(valor).toLocaleString('pt-BR');
}

export const formatDate = (valor) => {
    let data_atual = new Date(valor);
    let dia = data_atual.getDate();
    let mes = data_atual.getMonth() +1;
    let ano = data_atual.getFullYear();
    
    return dia +'/'+ mes +'/'+ ano ;
}