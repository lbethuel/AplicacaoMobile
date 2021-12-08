import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default props => {
  return (
    <>
      <View style={style.FlexV4}>
        <View style={style.V0} />
        <View style={style.V1} />
        <View style={style.V2} />
      </View>
    </>
  );
};

const style = StyleSheet.create({
  FlexV4: {
    flexGrow: 1,
    width: 100,
    backgroundColor: 'black',
  },
  V0: {
    backgroundColor: 'red',
    height: 0,
  },
  V1: {
    backgroundColor: 'orange',
    flexGrow: 1,
  },
  V2: {
    backgroundColor: 'green',
    flexGrow: 1,
  },
});
