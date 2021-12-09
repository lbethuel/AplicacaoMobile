import React from 'react';
import {Text, Button, View, StyleSheet} from 'react-native';
import Estilo from '../estilo';

export default ({num}) => {
  return (
    <View style={style.Container}>
      <Text style={[Estilo.FonteG, style.Num]}>{num}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  Container: {
    height: 50,
    width: 50,
    backgroundColor: 'black',
    margin: 5,
    borderRadius: 25,
  },
  Num: {
    color: 'white',
  },
});
