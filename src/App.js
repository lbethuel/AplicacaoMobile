import React from 'react';
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';

import MinMax from './components/MinMax';
import Primeiro from './components/Primeiro';
import CompPadrao, {Comp1, Comp2} from './components/Multi';
import Aleatorio from './components/Aleatorio';
import Titulo from './components/Titulo';
import Botao from './components/Botao';
import Contador from './components/Contador';
//import Pai from './components/indireta/Pai';
import ContadorV2 from './components/contador/ContadorV2';
import Diferenciar from './components/Diferenciar';
import ParImpar from './components/ParImpar';
import Familia from './components/relacao/Familia';
import Membro from './components/relacao/Membro';
import UsuarioLogado from './components/UsuarioLogado';
import ListaProdutos from './components/produtos/ListaProdutos';

export default () => (
  <SafeAreaView style={style.App}>
    <ListaProdutos />
    {/* 
    <UsuarioLogado usuario={{nome: 'Lucas', email: 'lu@lu.com'}} />
    <Familia nome="Familia Oliveira">
      <Membro nome="Maria " sobrenome="Oliveira" />
      <Membro nome="Joana " sobrenome="Oliveira" />
    </Familia>
    <Familia nome="Familia Ferreira">
      <Membro nome="Pedro " sobrenome="Ferreira" />
      <Membro nome="Francisco " sobrenome="Ferreira" />
      <Membro nome="Patrick " sobrenome="Ferreira" />
      <Membro nome="Fernanda " sobrenome="Ferreira" />
    </Familia>
    <ParImpar num={0} />
    <Diferenciar />
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
  </SafeAreaView>
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
