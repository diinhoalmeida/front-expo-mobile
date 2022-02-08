import React, { useEffect, useState } from 'react';
import { Text, Modal, Alert, TextInput, View, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './style';
import { useGetById, useUpdateById } from '../../../contexts/ApiCallContext';
import IUser from '../../../interfaces/user.interface';

export default function UserUpdate({setModalUpdateVisible, modalUpdateVisible, refreshTheList}: any) {
  const [theUser, setTheUser] = useState<IUser>({
    nome: '',
    idade: null,
    email: '',
    telefone: ''
  });
  const { userSelectedById } = useGetById();
  const { updateById } = useUpdateById();

  useEffect(() => {
    setTheUser(userSelectedById);
  }, [userSelectedById])

  return (
    <View>
      <Modal
          animationType="slide"
          transparent={true}
          visible={modalUpdateVisible}
        >
          <TouchableOpacity 
            style={styles.container}
            onPressOut={() => setModalUpdateVisible(false)}
          >
            <View style={styles.modalContent}>
              <View style={styles.contentTitle}>
                <Text>Editar Usuário</Text>
              </View>
              <View style={styles.contentToCreate}>
                <TextInput
                  style={styles.inputText}
                  value={theUser?.nome}
                  autoCapitalize='words'
                  onChangeText={text => setTheUser({...theUser, nome: text})}
                />
                <TextInput
                  style={styles.inputText}
                  value={theUser?.idade}
                  keyboardType="numeric"
                  maxLength={3}
                  onChangeText={text => setTheUser({...theUser, idade: text})}
                />
                <TextInput
                  style={styles.inputText}
                  value={theUser?.email}
                  onChangeText={text => setTheUser({...theUser, email: text})}
                />
                <TextInput
                  style={styles.inputText}
                  value={theUser?.telefone}
                  keyboardType="numeric"
                  maxLength={14}
                  onChangeText={text => setTheUser({...theUser, telefone: text})}
                />
              </View>
              <View style={styles.btnSpace}>
                <Button 
                  style={styles.btnStyles} 
                  color='#6200EE'
                  mode="contained" 
                  onPress={() => {
                    updateById(userSelectedById?.id, theUser, refreshTheList); 
                    setModalUpdateVisible(!modalUpdateVisible);
                  }}
                >
                  Atualizar
                </Button>
              </View>
              <View style={styles.btnSpace}>
                <Button 
                  style={styles.btnStyles} 
                  color='red'
                  mode="contained" 
                  onPress={() => {
                    setModalUpdateVisible(false)}
                  }
                >
                  Cancelar
                </Button>
              </View>
            </View>
          </TouchableOpacity>
        </Modal>
        </View>
  );
}