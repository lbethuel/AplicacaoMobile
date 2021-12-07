import React from 'react';
import {Text, Button, View} from 'react-native';
import Estilo from '../estilo';
import produtos from './produtos';

export default props => {
  function obterLista() {
    return produtos.map(p => (
      <Text style={Estilo.FonteM} key={p.id}>
        {p.id} {p.nome} R$ {p.preco}
      </Text>
    ));
  }
  return (
    <>
      <Text style={Estilo.FonteG}>Lista de Produtos</Text>
      {obterLista()}
    </>
  );
};
