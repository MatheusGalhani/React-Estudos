const PRODUTOS = '_PRODUTOS';

export function ErroValidacao(errors){
    this.errors = errors;
}


export default class ProdutoService{

    validate = (produto) => {
        const errors = [];

        if(!produto.nome){
            errors.push("O campo Nome é obrigatório.")
        }

        if(!produto.sku){
            errors.push("O campo SKU é obrigatório.")
        }

        if(produto.preco <= 0){
            errors.push("O campo preço deve ser maior que 0.")
        }

        if(!produto.fornecedor){
            errors.push("O campo Fornecedor é obrigatório.")
        }
        

        if (errors.length > 0){
            throw new ErroValidacao(errors);
        }
    }

    getProducts = () => {
        const produtos = localStorage.getItem(PRODUTOS);
        if (!produtos){
            return [];
        }
        return JSON.parse(produtos)
    }

    getIndex = (sku) => {
        let index = null;
        this.getProducts().forEach((produto, i) =>{
            if(produto.sku === sku) index = i
        })
        return index;
    }

    delete = (sku) => {
        const index = this.getIndex(sku)
        if (index !== null){
            const produtos = this.getProducts();
            produtos.splice(index, 1);
            localStorage.setItem(PRODUTOS, JSON.stringify(produtos));
            return produtos;
        } 
        return this.getProducts();
    }

    save = (produto) => {
        
        this.validate(produto);

        let produtos = localStorage.getItem(PRODUTOS);

        if (!produtos) {
            produtos = [];
        } else {
            produtos = JSON.parse(produtos);
        }

        const index = this.getIndex(produto.sku);

        index === null ? produtos.push(produto) : produtos[index] = produto;

        localStorage.setItem(PRODUTOS, JSON.stringify(produtos));
    }
}