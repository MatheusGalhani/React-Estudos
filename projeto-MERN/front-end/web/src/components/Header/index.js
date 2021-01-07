import React from 'react';

import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';
import * as Styled from './styles';


function Header(props) {
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
                    <button id="notification" type="submit" onClick={props.clickNotification}>
                        <img src={bell} alt="Notificação"/>
                        <span>{props.lateCount}</span>
                    </button>
                </Styled.RightSide>
            </Styled.Container>
        </React.Fragment>
    );
}

export default Header;  