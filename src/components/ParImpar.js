import React from 'react';
import {Text, Button, View} from 'react-native';
import Estilo from './estilo';

export default props => {
  return (
    <View>
      <Text style={Estilo.FonteM}> O resultado é: </Text>
      {props.num % 2 === 0 ? (
        <Text style={Estilo.FonteG}>Par</Text>
      ) : (
        <Text style={Estilo.FonteG}>Impar</Text>
      )}
    </View>
  );
};
