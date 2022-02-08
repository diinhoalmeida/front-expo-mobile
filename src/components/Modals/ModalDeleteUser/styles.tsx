import { StyleSheet } from 'react-native';
import { screenHeight } from '../../../styles/Dimensions/dimensions'

export const styles = StyleSheet.create({
    container: {
      backgroundColor: 'hsla(0, 10%, 90%, 0.5)',
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      flex: 1
    },
    modalContent: {
      width: '80%',
      alignItems: 'center',
      borderRadius: 10,
      backgroundColor: '#F4F4F4',
      borderWidth: 1
    },
    contentTitle: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      marginBottom: 10,
      borderBottomWidth: 1,
      height: 50,
      width: '100%'
    },
    contentToCreate: {
      display: 'flex',
      padding: 10,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
    },
    contentSpace: {
      alignItems: 'center',
      justifyContent: 'center'
    },
    logo: {
      width: 50
    },
    textStyle: {
      fontSize: 15,
      fontWeight: 'bold'
    },
    textStyles: {
      color: '#8491A3',
      fontSize: 20
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