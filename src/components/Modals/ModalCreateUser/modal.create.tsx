import { NavigationHelpersContext, useIsFocused } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useCreateUser } from '../../../contexts/ApiCallContext';
import IUser from '../../../interfaces/user.interface';
import { styles } from './styles';

export default function ModalCreate({ navigation }: any) {
  const [objectToPost, setObjectToPost] = useState<IUser>({  
    nome: '',
    email: '',
    idade: null,
    telefone: ''
  })
  const { createUser } = useCreateUser();

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.boxContent}>
          <View style={styles.contentTitle}>
            <Text>Novo Usuário</Text>
          </View>
          <View style={styles.contentToCreate}>
            <TextInput
              style={styles.inputText}
              placeholder='Nome'
              value={objectToPost?.nome}
              autoCapitalize='words'
              onChangeText={text => setObjectToPost({...objectToPost, nome: text})}
            />
            <TextInput
              style={styles.inputText}
              placeholder='Idade'
              value={objectToPost?.idade}
              keyboardType="numeric"
              maxLength={3}
              onChangeText={text => setObjectToPost({...objectToPost, idade: text})}
            />
            <TextInput
              style={styles.inputText}
              autoCapitalize='none'
              placeholder='Email'
              value={objectToPost?.email}
              onChangeText={text => setObjectToPost({...objectToPost, email: text})}
            />
            <TextInput
              style={styles.inputText}
              placeholder='Telefone'
              value={objectToPost?.telefone}
              maxLength={14}
              onChangeText={text => setObjectToPost({...objectToPost, telefone: text})}
            />
          </View>
          <View style={styles.btnSpace}>
            <Button 
              style={styles.btnStyles} 
              mode="contained" 
              onPress={() => createUser(objectToPost, setObjectToPost, navigation)}
            >
              Cadastrar
            </Button>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}