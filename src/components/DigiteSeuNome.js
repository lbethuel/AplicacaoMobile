import React, {useState} from 'react';
import {TextInput, Text, View} from 'react-native';
import Estilo from './estilo';

export default props => {
  const [nome, setNome] = useState('');
  return (
    <View>
      <Text style={Estilo.FonteG}>{nome}</Text>
      <TextInput
        style={Estilo.FonteM}
        placeholder="Digite seu Nome"
        value={nome}
        onChangeText={nome => setNome(nome)}
      />
    </View>
  );
};
