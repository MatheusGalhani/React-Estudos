import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    footer: {
        width: '100%',
        height: 95,
        backgroundColor: '#20295f',
        borderTopWidth: 5,
        borderTopColor: '#ee6b26',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0
    },
    button: {
        position: 'relative',
        top: -55
    },
    image: {
        width: 80,
        height: 80
    },
    text: {
        position: 'relative',
        top: -35,
        color: '#ee6b26',
        fontWeight: 'bold'
    }
    
});

export default styles;