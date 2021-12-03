import React from 'react';
import {Text, Button, View, StyleSheet} from 'react-native';
import Estilo from '../estilo';

export default props => {
  return (
    <View style={style.Display}>
      <Text style={Estilo.FonteG}>{props.num}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  Display: {
    backgroundColor: 'black',
    padding: 20,
    width: 300,
  },
});
