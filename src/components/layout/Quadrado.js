import React from 'react';
import {Text, View} from 'react-native';
import Estilo from '../estilo';

export default props => {
  const lado = props.lado || 50;
  return (
    <View
      style={{
        height: lado,
        width: lado,
        backgroundColor: props.cor || '#000',
      }}
    />
  );
};
