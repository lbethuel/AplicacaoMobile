import React from 'react';
import {Text} from 'react-native';
import Estilo from './estilo';

export default function Comp() {
  return <Text style={Estilo.FonteG}>Comp #1</Text>;
}

export function Comp1() {
  return <Text style={Estilo.FonteG}>Comp #2</Text>;
}

export function Comp2() {
  return <Text style={Estilo.FonteG}>Comp #3</Text>;
}
