import React from 'react';
import {Text, Platform} from 'react-native';
import Estilo from './estilo';

export default () => {
  console.warn(Platform.OS);
  if (Platform.OS === 'android') {
    return <Text style={Estilo.FonteG}>Android</Text>;
  } else if (Platform.OS === 'ios') {
    return <Text style={Estilo.FonteG}>iOS</Text>;
  } else {
    return <Text style={Estilo.FonteG}>Nenhum dos dois</Text>;
  }
};
