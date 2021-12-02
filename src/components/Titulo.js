import React from 'react';
import {View, Text} from 'react-native';
import Estilo from './estilo';

export default props => {
  return (
    <React.Fragment key={1}>
      <Text style={Estilo.FonteG}>{props.principal}</Text>
      <Text style={Estilo.FonteM}>{props.segundario}</Text>
    </React.Fragment>
  );
};
