import React from 'react';
import {Text, Button, View} from 'react-native';
import Estilo from './estilo';
import If from './If';

export default ({usuario}) => {
  return (
    <>
      <If teste={true}>
        <Text style={Estilo.FonteM}>Usuário Logado:</Text>
        <Text style={Estilo.FonteG}>
          {usuario.nome} - {usuario.email}
        </Text>
      </If>
    </>
  );
};
