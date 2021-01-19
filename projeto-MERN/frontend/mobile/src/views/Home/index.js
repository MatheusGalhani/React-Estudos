import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

// Componentes
import Header from '../../components/Header';

function Home() {
    return (
        <View style={styles.container}>
            <Header showNotification={true} showBack={false} />
        </View>
    )
}


export default Home;