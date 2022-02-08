import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      backgroundColor: '#2C363F',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    boxContent: {
      width: '80%',
      borderRadius: 10,
      height: 420,
      backgroundColor: '#F4F4F4',
    },
    contentTitle: {
      display: 'flex',
      justifyContent: 'center',
      padding: 10,
      marginBottom: 10,
      borderBottomWidth: 1,
      height: 50
    },
    contentToCreate: {
      display: 'flex',
      padding: 10,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
    },
    imageSpace: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: 15      
    },
    image: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 50,
      width: 80,
      height: 80,
      borderWidth: 1
    },  
    logo: {
      width: 50
    },
    inputText: {
      height: 40,
      fontSize: 18,
      borderWidth: 1,
      borderRadius: 10,
      marginBottom: 15,
      padding: 10
    },
    textStyles: {
      color: '#8491A3',
      fontSize: 20
    },
    imgStyles: {
      width: 305,
      height: 159
    },
    btnSpace: {
      display: 'flex',
      alignItems: 'center',
      marginTop: 30
    },
    btnStyles: {
      width: 150
    },
    btnTextStyles: {
      color: 'black'
    }
});