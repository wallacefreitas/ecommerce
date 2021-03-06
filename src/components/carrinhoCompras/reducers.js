const INITIAL_STATE = { items:[] }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case 'CARRINHO_LISTAR': 
            let items = localStorage.getItem('carrinhoCompra') != null ? (JSON.parse(localStorage.getItem('carrinhoCompra'))).items : [];
            return { ...state, items: items}
        break;
        
        case 'CARRINHO_ADICIONAR':
            let data = {...state };
            data.items.push(action.payload);
            localStorage.setItem('carrinhoCompra', JSON.stringify(data))
            return data;
        break;

        case 'CARRINHO_REMOVER':
            let _data = { ...state };
            _data.items.splice(action.payload,1)
            localStorage.setItem('carrinhoCompra', JSON.stringify(_data));
            return _data;

        break;
        default:
            return state;
    }
}