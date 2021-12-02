import React, {useState, Fragment} from 'react';
import {Text, Button, View} from 'react-native';
import Estilo from './estilo';

export default ({inicial = 0, passo = 1}) => {
  //let numero = props.inicial;

  const [numero, setNumero] = useState(inicial);

  const inc = () => {
    setNumero(numero + passo);
  };
  const dec = () => {
    setNumero(numero - passo);
  };

  return (
    <Fragment>
      <Text style={Estilo.FonteG}>{numero}</Text>
      <View>
        <Button title="Mais" onPress={inc} />
        <Button title="Menos" onPress={dec} />
      </View>
    </Fragment>
  );
};
