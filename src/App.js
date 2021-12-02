import React from 'react';
import {View, StyleSheet} from 'react-native';

import MinMax from './components/MinMax';
import Primeiro from './components/Primeiro';
import CompPadrao, {Comp1, Comp2} from './components/Multi';
import Aleatorio from './components/Aleatorio';
import Titulo from './components/Titulo';
import Botao from './components/Botao';
import Contador from './components/Contador';

export default () => (
  <View style={style.App}>
    <Contador inicial={100} passo={13} />
    <Contador />

    {/* 
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
    backgroundColor: 'darkred',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
