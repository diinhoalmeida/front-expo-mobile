import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, Text, FlatList, Image  } from 'react-native';

import { styles } from './styles';
import { Button } from 'react-native-paper';
import {
    useGetById, useGetAllData  
  } from '../../contexts/ApiCallContext';
import UserUpdate from '../../components/Modals/ModalUpdateUser/user.update';
import UserDelete from '../../components/Modals/ModalDeleteUser/modal.delete';
import { useIsFocused } from '@react-navigation/native';

const TableUsers = ({ navigation }: any) => {
    const [listUsers, setListUsers] = useState<Array<any>>();
    const { getById } = useGetById();
    const [modalUpdateVisible, setModalUpdateVisible] = useState(false);
    const [modalDeleteVisible, setModalDeleteVisible] = useState(false);
    const { getAllUsers } = useGetAllData();
    const isFocused = useIsFocused();

    useEffect(() => {
        if (isFocused) getAllUsers(setListUsers);  
    }, [isFocused]);

    const refreshTheList = () => {
        getAllUsers(setListUsers)
    }

    return (
            <SafeAreaView>   
                    <FlatList
                        style={styles.bodyContainer}
                        data={listUsers}
                        renderItem={({item}) => (
                            <View style={styles.card} key={item.id}>
                                <View style={styles.cardData}>
                                    <View style={styles.dataSpace}>
                                        <Text>Nome: {item.nome}</Text>
                                        <Text>Idade: {item.idade}</Text>
                                        <Text>Telefone: {item.telefone}</Text>
                                        <Text>Email: {item.email}</Text>
                                    </View>
                                </View>
                                <View style={styles.actionsSpace}>
                                    <Button 
                                        style={styles.btnStyles} 
                                        mode="contained" 
                                        onPress={() => {
                                            getById(item.id, setModalUpdateVisible); 
                                        }}
                                    >
                                        Editar
                                    </Button> 
                                    <Button 
                                        style={styles.btnStyles} 
                                        color="red" 
                                        mode="contained" 
                                        onPress={() => {
                                            getById(item.id, setModalDeleteVisible); 
                                        }}
                                    >
                                        Deletar
                                    </Button>         
                                </View>
                                <UserUpdate  
                                    setModalUpdateVisible={setModalUpdateVisible}
                                    modalUpdateVisible={modalUpdateVisible}
                                    refreshTheList={refreshTheList}
                                />
                                <UserDelete 
                                    modalDeleteVisible={modalDeleteVisible}
                                    setModalDeleteVisible={setModalDeleteVisible}
                                    refreshTheList={refreshTheList}
                                />
                            </View>
                        )}
                        keyExtractor={item => item.id}
                    />
            </SafeAreaView>
    );
}

export default TableUsers;