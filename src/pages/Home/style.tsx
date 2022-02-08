import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        height: '100%',
        backgroundColor: '#2C363F',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyles: {
        color:'#FFF',
        fontSize: 20,
        textAlign: 'center',
        width: 240,
        marginBottom: 30
    },
    logo: {
        width: 200,
        height: 150,
        marginBottom: 20,
        resizeMode: 'stretch'
    }
});