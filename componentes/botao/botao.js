import { useState } from 'react';
import style from './botao.module.css';
export default function Botao(props) {
  const [value, setValue] = useState(0);

  function handleAddClick() {
    setValue(value + 1);
  }

  return (
    <button
      class={value % 2 == 0 ? style.red : style.blue}
      onClick={handleAddClick}
    >
      {props.children} {props.text} = <b>{value}</b>
    </button>
  );
}
