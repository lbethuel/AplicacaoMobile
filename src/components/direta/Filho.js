import React, {Fragment} from 'react';
import {Text, View, Button} from 'react-native';
import Estilo from '../estilo';

export default props => {
  return (
    <Fragment>
      <Text style={Estilo.FonteG}>{props.a}</Text>
      <Text style={Estilo.FonteG}>{props.b}</Text>
    </Fragment>
  );
};
