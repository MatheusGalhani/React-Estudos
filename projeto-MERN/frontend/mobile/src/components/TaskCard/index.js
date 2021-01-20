import React from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import { format } from 'date-fns';

import styles from './styles';

//Icones
import typeIcons from '../../utils/typeIcons';


function TaskCard(props) {
    return (

        <TouchableOpacity style={[styles.card, props.done ? styles.done : null]}>
            <View style={styles.cardLeft}>
                <Image source={typeIcons[props.type]} style={styles.typeActive} />
                <Text style={styles.cardTitle}>{props.title}</Text>
            </View>
            <View style={styles.cardRight}>
                <Text style={styles.cardDate}>{format(new Date(props.when), 'dd/MM/yyyy')}</Text>
                <Text style={styles.cardTime}>{format(new Date(props.when), 'HH:mm')}</Text>
            </View>
        </TouchableOpacity>

    )
}


export default TaskCard;