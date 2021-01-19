import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 95,
        backgroundColor: '#20295f',
        borderBottomWidth: 5,
        borderBottomColor: '#ee6b26',
        alignItems: 'center',
        justifyContent: 'center'
    },

    logo: {
        width: 100,
        height: 35,
        marginTop: 35
    },

    notification: {
        position: 'absolute',
        right: 20,

    },

    circle: {
        width: 20,
        backgroundColor: '#fff',
        borderRadius: 50,
        alignItems: 'center',
        position: 'absolute',
        left: 13,
        bottom: 13
    },

    notificationImage: {
        width: 30,
        height: 35,
        marginTop: 35
    },

    notificationText: {
        fontWeight: 'bold',
        color: '#ee6b26'
    },

    leftIcon: {
        position: 'absolute',
        left: 20,
    },

    leftIconImage: {
        width: 30,
        height: 30,
        marginTop: 35
    }
});

export default styles;