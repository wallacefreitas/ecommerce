export function editar(){

}


export function excluir(props, idx){
    props.remover(idx);
    props.get();
}