import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

//Icones
import add from '../../assets/add.png';
import save from '../../assets/save.png';


function Footer(props) {
    return (
        <View style={styles.footer}>
            <TouchableOpacity style={styles.button}>
                {
                    props.icon === 'add' 
                    ? <Image source={add} style={styles.image}/>
                    : <Image source={save} style={styles.image}/>
                }
            </TouchableOpacity>

            <Text style={styles.text}>Organizando sua vida</Text>
        </View>
    )
}


export default Footer;