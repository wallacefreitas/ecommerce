export default class CarrinhoCompra{
    static instance = null;

    constructor(){
        if(!CarrinhoCompra.instance)
            CarrinhoCompra.instance = this;


        this.produtos = []
    }
    static list() {
        return CarrinhoCompra.get().produtos;
    }
    static add(item){
        CarrinhoCompra.get().produtos.push(item);
    }

    static remover(id){
        CarrinhoCompra.get().produtos = CarrinhoCompra.get().produtos.filter(
            (item) =>{
                return item.id != id;
        })
    }

    static get(){
        if(!CarrinhoCompra.instance)
            return new CarrinhoCompra();
        else return CarrinhoCompra.instance;
    }

}