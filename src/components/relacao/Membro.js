import React from 'react';
import {Text, Button, View} from 'react-native';
import Estilo from '../estilo';

export default props => {
  return (
    <Text style={Estilo.FonteG}>
      {props.nome}
      {props.sobrenome}
    </Text>
  );
};
