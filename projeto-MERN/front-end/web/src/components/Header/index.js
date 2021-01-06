import React from 'react';

import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';
import * as Styled from './styles';


function Header() {
    return (
        <React.Fragment>
            <Styled.Container>
                <Styled.LeftSide>
                    <img src={logo} alt="Logo" />
                </Styled.LeftSide>
                <Styled.RightSide>
                    <a href="#">INÍCIO</a>
                    <span className="dividir"/>
                    <a href="#">NOVA TAREFA</a>
                    <span className="dividir"/>
                    <a href="#">SINCRONIZAR CELULAR</a>
                    <span className="dividir"/>
                    <a href="#" id="notification">
                        <img src={bell} alt="Notificação"/>
                        <span>5</span>
                    </a>
                </Styled.RightSide>
            </Styled.Container>
        </React.Fragment>
    );
}

export default Header;  