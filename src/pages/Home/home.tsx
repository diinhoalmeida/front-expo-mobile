import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './style';
import { Button } from 'react-native-paper';
import AkatsukiLogo from '../../../assets/akatsuki.png';

export default function Home({ navigation }) {

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={AkatsukiLogo}
      />
        <Text style={styles.textStyles}>Olá, clique abaixo para acessar a lista de usuários.</Text>
          <Button mode="contained" onPress={() => navigation.push('Tabs')}>
            Iniciar
          </Button>
    </View>
  );
}
