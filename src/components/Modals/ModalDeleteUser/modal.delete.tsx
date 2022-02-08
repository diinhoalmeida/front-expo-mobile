import React, { useState, useEffect } from 'react';
import { Alert, Image, Linking, Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import {
  useGetById,
  useDeleteById  
} from '../../../contexts/ApiCallContext';

export default function UserDelete({modalDeleteVisible, setModalDeleteVisible, refreshTheList}: any) {
  const { userSelectedById } = useGetById();
  const { deleteById } = useDeleteById();

    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalDeleteVisible}
            >
                <TouchableOpacity
                    style={styles.container}
                    onPressOut={() => setModalDeleteVisible(false)}
                >
                    <View style={styles.modalContent}>
                        <View style={styles.contentTitle}>
                            <Text>Deletar Usuário</Text>
                        </View>
                        <View style={styles.contentSpace}>
                            <Text style={styles.textStyle} >Gostaria de excluir o usuário ?</Text>
                            <View style={styles.btnSpace}>
                                <Button 
                                    style={styles.btnStyles} 
                                    color='red'
                                    mode="contained" 
                                    onPress={() => {
                                        deleteById(userSelectedById?.id, refreshTheList); 
                                        setModalDeleteVisible(!modalDeleteVisible);
                                    }}
                                >
                                Deletar
                                </Button>
                                <Button 
                                    style={styles.btnStyles} 
                                    color='#6200EE'
                                    mode="contained" 
                                    onPress={() => { 
                                        setModalDeleteVisible(!modalDeleteVisible);
                                    }}
                                >
                                Cancelar
                                </Button>
                            </View>
                        </View>
                    </View >
                </TouchableOpacity>
            </Modal>
        </View>
    );
}