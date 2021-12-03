import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import MinMax from './components/MinMax';
import Primeiro from './components/Primeiro';
import CompPadrao, {Comp1, Comp2} from './components/Multi';
import Aleatorio from './components/Aleatorio';
import Titulo from './components/Titulo';
import Botao from './components/Botao';
import Contador from './components/Contador';
import Pai from './components/indireta/Pai';
import ContadorV2 from './components/contador/ContadorV2';
import Diferenciar from './components/Diferenciar';

export default () => (
  <View style={style.App}>
    <Diferenciar />
    {/* 
    <ContadorV2 />
    <Text>
      <Pai />
    </Text>
    <Pai />
    <Contador inicial={100} passo={13} />
    <Contador />
    <Botao />
    <Titulo
      principal="Cadastro Produto"
      segundario="Tela de Cadastro do Produto"
    />
    <Aleatorio min={1} max={60} />
    <MinMax min={3} max={20} />
     <CompPadrao />
    <Comp1 />
    <Comp2 />
    <Primeiro /> */}
  </View>
);

const style = StyleSheet.create({
  App: {
    backgroundColor: 'darkgreen',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
