import React from 'react';
import ProdutoService from '../../app/produtosService';
import { withRouter } from 'react-router-dom';

const initialState = {
    nome: "",
    sku: "",
    preco: 0,
    fornecedor: "",
    descricao: "",
    successComponent: false,
    errors: [],
    atualizando: false
}

class CadastroProdutos extends React.Component {

    state = initialState;

    constructor() {
        super();
        this.service = new ProdutoService();
    }

    changeFields = (e) => {
        const valor = e.target.value;
        const nomeCampo = e.target.id;
        this.setState({ [nomeCampo]: valor });
    }

    clearFields = () => {
        this.setState(initialState);
    }

    createProduct = (e) => {
        e.preventDefault();  // é necessario, quando usamos form, para que seja enviado o form de forma reativa
        const produto = {
            nome: this.state.nome,
            sku: this.state.sku,
            preco: this.state.preco,
            fornecedor: this.state.fornecedor,
            descricao: this.state.descricao
        }
        try {
            this.service.save(produto);
            this.clearFields();
            this.componentDidMount();
            this.setState({ successComponent: true });
        } catch (erro) {
            const errors = erro.errors;
            this.setState({ errors: errors });
        }
    }

    componentDidMount() {
        const sku = this.props.match.params.sku;
        if (sku) {
            const result = this.service.getProducts().filter(produto => produto.sku === sku);
            if (result.length === 1) this.setState({ ...result[0], atualizando: true })
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="card">
                    <div className="card-header">{this.state.atualizando ? 'Dados do Produto' : 'Cadastro de Produto'} </div>
                    <div className="card-body">
                        <form id="frm-prooduto" onSubmit={this.createProduct}>
                            {this.state.successComponent &&
                                <div className="alert alert-dismissible alert-success">
                                    <button type="button" className="close" data-dismiss="alert">&times;</button>
                                    {this.state.atualizando ? 'Produto atualizado' : 'Cadastro realizado'} com sucesso.
                        </div>}
                            {this.state.errors.length > 0 &&
                                this.state.errors.map(msg => {
                                    return (
                                        <div className="alert alert-dismissible alert-danger">
                                            <button type="button" className="close" data-dismiss="alert">&times;</button>
                                            <strong>Erro!</strong> {msg}
                                        </div>
                                    )
                                })
                            }

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="nome">Nome: *</label>
                                        <input type="text" className="form-control" id="nome" value={this.state.nome} onChange={this.changeFields} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="sku">Sku: *</label>
                                        <input type="text" className="form-control" id="sku" value={this.state.sku} onChange={this.changeFields} disabled={this.state.atualizando} />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="preco">Preço: *</label>
                                        <input type="number" className="form-control" id="preco" value={this.state.preco} onChange={this.changeFields} min="0" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="fornecedor">Fornecedor: *</label>
                                        <input type="text" className="form-control" id="fornecedor" value={this.state.fornecedor} onChange={this.changeFields} />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label htmlFor="descricao">Descrição: *</label>
                                        <textarea type="text" className="form-control" id="descricao" rows="18" onChange={this.changeFields} value={this.state.descricao}></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-1">
                                    <button className="btn btn-success" type="submit">
                                        {this.state.atualizando ? 'Atualizar' : 'Salvar'}
                                    </button>
                                </div>
                                <div className="col-md-1">
                                    <button className="btn btn-primary" onClick={this.clearFields}>Limpar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default withRouter(CadastroProdutos);
