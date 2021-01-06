import React from 'react';

import * as Styled from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';


function Home() {
    return (
        <React.Fragment>
            <Styled.Container>
                <Header/>
                
                <Footer/>
            </Styled.Container>
        </React.Fragment>
    );
}

export default Home;  