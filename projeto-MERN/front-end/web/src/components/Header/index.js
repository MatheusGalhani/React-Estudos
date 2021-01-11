import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';
import * as Styled from './styles';

import api from '../../services/api';
import isConnected from '../../utils/isConnected';


function Header(props) {
    const [lateTask, setLateTasks] = useState(0);

    async function lateVerify() {
        await api.get(`/task/filter/late/${isConnected}`).then(response => {
            setLateTasks(response.data.length);
        });
    }

    async function logout() {
        localStorage.removeItem('@todo/macaddress');
        window.location.reload();
    }

    useEffect(() => {
        lateVerify();
    }, []);

    return (
        <React.Fragment>
            <Styled.Container>
                <Styled.LeftSide>
                    <img src={logo} alt="Logo" />
                </Styled.LeftSide>
                <Styled.RightSide>
                    <Link to="/">INÍCIO</Link>
                    <span className="dividir"/>
                    <Link to="/task">NOVA TAREFA</Link>
                    <span className="dividir"/>
                    {
                        !isConnected ? <Link to="/qrcode">SINCRONIZAR CELULAR</Link> :
                        <button type="button" onClick={logout}>SAIR</button>
                    }
                    
                    {
                        lateTask ? 
                        <React.Fragment>
                            <span className="dividir"/>
                            <button id="notification" type="submit" onClick={props.clickNotification}>
                                <img src={bell} alt="Notificação"/>
                                <span>{lateTask}</span>
                            </button>
                        </React.Fragment>
                        : null
                    }
                </Styled.RightSide>
            </Styled.Container>
        </React.Fragment>
    );
}

export default Header;  