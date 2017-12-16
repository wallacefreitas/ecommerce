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