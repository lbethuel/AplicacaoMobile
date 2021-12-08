import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Quadrado from './Quadrado';

export default props => {
  return (
    <View style={style.FlexV1}>
      <Quadrado cor="orange" lado={20} />
      <Quadrado cor="green" lado={30} />
      <Quadrado cor="blue" lado={40} />
      <Quadrado cor="gray" lado={50} />
      <Quadrado cor="yellow" lado={60} />
    </View>
  );
};

const style = StyleSheet.create({
  FlexV1: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'stretch',
    height: 350,
    width: '100%',
    backgroundColor: 'black',
  },
});
