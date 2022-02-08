import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      backgroundColor: 'hsla(0, 10%, 90%, 0.5)',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4
    },
    modalContent: {
      width: '80%',
      borderRadius: 10,
      height: 420,
      backgroundColor: '#F4F4F4',
      borderWidth: 1
    },
    contentTitle: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingLeft: 10,
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
      alignItems: 'center'
    },
    btnStyles: {
      width: 150,
      margin: 10
    },
    btnTextStyles: {
      color: 'black'
    }
});