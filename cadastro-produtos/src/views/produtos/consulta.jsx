import React from 'react';
import ProdutoService from '../../app/produtosService';
import { withRouter } from 'react-router-dom';


class ConsultaProdutos extends React.Component {
    state = {
        produtos: []
    }

    constructor() {
        super();
        this.service = new ProdutoService();
    }

    componentDidMount(){
        const produtos = this.service.getProducts();
        this.setState({produtos: produtos});
    }

    prepare = (sku) => {
        this.props.history.push(`/cadastro-produtos/${sku}`);
    }

    delete = (sku) => {
        const produtos = this.service.delete(sku);
        this.setState({produtos});
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">Consulta de Produto</div>
                <div className="card-body">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>SKU</th>
                                <th>Preço</th>
                                <th>Fornecedor</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.produtos.map((produto, index) => {
                                    return (
                                        <tr key={index}>    
                                            <th>{produto.nome}</th>
                                            <th>{produto.sku}</th>
                                            <th>{produto.preco}</th>
                                            <th>{produto.fornecedor}</th>
                                            <th>
                                                <button className="btn btn-primary" onClick={() => this.prepare(produto.sku)}>Editar</button>
                                                <button className="btn btn-danger ml-2" onClick={() => this.delete(produto.sku)}>Remover</button>
                                            </th>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default withRouter(ConsultaProdutos);

