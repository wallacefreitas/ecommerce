export function set(dados){
    return {
        type: 'SESSAO_SET_DADOS',
        payload: dados
    }
}

export function clear(){
    return {
        type: 'SESSAO_CLEAR'
    }
}