const INITIAL_STATE = null

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SESSAO_SET_DADOS':
            return {
                ...state, ...action.payload
            }
        break;

        case 'SESSAO_CLEAR':
            return null;
        default:
            return state;
    }
}