import React from 'react';
import {Text} from 'react-native';
import Estilo from './estilo';

export default props => {
  console.warn(props);

  const {min, max} = props;
  const delta = max - min;
  const aleatorio = Math.floor(Math.random() * delta);

  return <Text style={Estilo.FonteG}>Numero aleatorio é {aleatorio}</Text>;
};
