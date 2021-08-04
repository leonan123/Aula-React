import Head from 'next/head';
import Botao from '../componentes/botao/botao';
import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [value, setValue] = useState(0);

  function handleAddClick() {
    setValue(value + 1);
  }

  function handleRemoveClick() {
    setValue(value - 1);
  }

  return (
    <>
      <div class="container">
        <div id="num">número {value}</div>
        <button id="btnAdiciona" class="btn" onClick={handleAddClick}>
          Adicionar
        </button>
        <button id="btnRemove" class="btn" onClick={handleRemoveClick}>
          Remover
        </button>
      </div>
      <Botao text="Que botão legal" />
      <Botao text="Testando comportamento" />
    </>
  );
}
