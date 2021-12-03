import React, {Fragment} from 'react';
import {Text, Button, View, StyleSheet} from 'react-native';
import Estilo from '../estilo';

export default props => {
  return (
    <View style={style.Botoes}>
      <Button title="Mais" onPress={props.inc} />
      <Button title="Menos" onPress={props.dec} />
    </View>
  );
};

const style = StyleSheet.create({
  Botoes: {
    flexDirection: 'row',
    margin: 20,
  },
});
