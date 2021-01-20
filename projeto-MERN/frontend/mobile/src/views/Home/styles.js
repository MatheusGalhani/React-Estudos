import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    filter: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        height: 70,
        alignItems: 'center',  
    },
    filterTextActived: {
        color: '#ee6b26',
        fontWeight: 'bold',
        fontSize: 16
    },
    filterTextInactived: {
        color: '#20295f',
        fontWeight: 'bold',
        fontSize: 16,
        opacity: 0.5
    },
    content: {
        width: '100%',
        marginTop: 30
    },
    title: {
        width: '100%',
        borderBottomWidth: 1,
        borderColor: '#20295f',
        alignItems: 'center'
    },
    titleText: {
        color: '#20295f',
        fontSize: 18,
        position: 'relative',
        top: 11,
        backgroundColor: '#fff',
        paddingHorizontal: 10
    }
});

export default styles;