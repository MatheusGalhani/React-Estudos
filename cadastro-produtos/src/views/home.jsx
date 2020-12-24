import React from 'react';

function Home() {
    return (
        <React.Fragment>
            <div class="jumbotron">
                <h1 class="display-3">Bem vindo!</h1>
                <p class="lead">Este é seu sistema, utilize a barra de navegação para acessar acessar as páginas.</p>
                <hr class="my-4" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p class="lead">
                    <a class="btn btn-primary btn-lg" href="#" role="button">Cadastrar</a>
                </p>
            </div>
        </React.Fragment>
    )
}

export default Home;