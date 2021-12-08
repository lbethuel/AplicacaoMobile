import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Quadrado from './Quadrado';

export default props => {
  return (
    <View style={style.FlexV1}>
      <Quadrado cor="orange" />
      <Quadrado cor="green" />
      <Quadrado cor="blue" />
      <Quadrado cor="gray" />
      <Quadrado cor="yellow" />
    </View>
  );
};

const style = StyleSheet.create({
  FlexV1: {
    flexGrow: 1,
    backgroundColor: 'black',
    justifyContent: 'space-between',
  },
});
