import React, { useState, useEffect } from 'react';
import { Redirect} from 'react-router-dom';

import * as Styled from './styles';
import Qr from 'qrcode.react';


import Header from '../../components/Header';
import Footer from '../../components/Footer';
import isConnected from '../../utils/isConnected';


function QrCode() {

    const [macaddress, setMacaddress] = useState('');
    const [redirect, setRedirect] = useState(false);

    async function SaveMac(){
        await localStorage.setItem('@todo/macaddress', macaddress);
        setRedirect(true);
        window.location.reload();
    }
    
    useEffect(() => {
        if (isConnected) setRedirect(true)
    }, []);


    return (
        <React.Fragment>
            { redirect ? <Redirect to="/" /> : null}
            <Styled.Container>
                <Header />
                    <Styled.Content>
                        <h2>CAPTURE O QRCODE PELO APP</h2>
                        <p>Suas atividades serão sincronizadas com a do seu celular.</p>
                        
                        <Styled.QrCodeArea>
                            <Qr value="getmacaddress" size={350}></Qr>
                        </Styled.QrCodeArea>

                        <Styled.ValidationCode>
                            <span>Digite a numeração que apareceu no celular</span>
                            <input type="text" onChange={e => setMacaddress(e.target.value)} value={macaddress}/>
                            <button type="button" onClick={SaveMac}>SINCRONIZAR</button>
                        </Styled.ValidationCode>
                    </Styled.Content>
                <Footer />
            </Styled.Container>
        </React.Fragment>
    );
}

export default QrCode;  