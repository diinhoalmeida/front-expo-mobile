import { StyleSheet, Dimensions  } from 'react-native';

export const styles = StyleSheet.create({
    bodyContainer: {
        width: '100%',
        height: '100%', 
        backgroundColor: '#2C363F',
        padding: 10
    },
    card: {
        width: '100%',
        padding: 5,
        backgroundColor: '#F4F4F4',
        borderRadius: 10,
        marginBottom: 10
    },
    cardData: {
        width: '100%',
        flexDirection: 'row'
    },
    dataSpace: {
        width: '70%'
    },    
    actionsSpace: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    tableSpace: {
       width: '100%',
        padding: '2%',  
        backgroundColor: '#2C363F'
    },
    tableSpaceContent: {
        width: '100%',
        backgroundColor: '#F4F4F4',
        borderWidth: 1,
        borderRadius: 10
    },
    columText: {
        color: '#2C363F'
    },  
    columnDataSpace: {
        width: '25%',
        alignItems: 'center'
    },
    tableSpaceContentColumns: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        height: 50,
        borderBottomWidth: 1
    },
    tableSpaceContentData: {
        display: 'flex',
        flexDirection: 'column'
    },
    tableSpaceContentDataRow: {
        display: 'flex',
        width: '100%',
        flex: 4,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 50
    },
    btnSpace: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 0
    },
    btnToView: {
        width: 25,
        height: 25,
        backgroundColor: '#565164'
    },
    btnToEdit: {
        width: 25,
        height: 25,
        backgroundColor: '#9ddbca'
    },
    btnSpaceFooter: {
        width: '100%',
        marginTop: 8,
        padding: '2%'
    },
    btnStyles: {
        width: 150
    }
});