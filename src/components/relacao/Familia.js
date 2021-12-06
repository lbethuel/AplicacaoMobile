import React, {Fragment} from 'react';
import {Text, Button, View} from 'react-native';
import Estilo from '../estilo';
import Membro from './Membro';

export default props => {
  return (
    <Fragment>
      <Text style={Estilo.FonteM}>{props.nome}</Text>
      <Text> </Text>
      {props.children}
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
    </Fragment>
  );
};
