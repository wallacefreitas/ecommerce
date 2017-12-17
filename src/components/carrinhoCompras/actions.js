export function get(){
    return {
        type: "CARRINHO_LISTAR",
        payload: []
    }
}

export function add(item){
    return {
        type: "CARRINHO_ADICIONAR",
        payload: item
    }
}

export function remover(idx){
    return { 
        type: "CARRINHO_REMOVER",
        payload: idx
    }
}