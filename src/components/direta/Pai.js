import React, {Fragment} from 'react';
import {Text, View, Button} from 'react-native';
import Estilo from '../estilo';

import Filho from './Filho';

export default props => {
  let x = 13;
  let y = 100;
  return (
    <Fragment style={Estilo.FonteG}>
      <Filho a={x} b={y} />
      <Filho a={x + 100} b={y + 200} />
    </Fragment>
  );
};
