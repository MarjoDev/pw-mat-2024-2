import * as React from 'react';

// eslint-disable-next-line react/prop-types
function Greeting({ initialName }) {
  // 💣 exclua esta declaração de variável e troque por uma chamada de React.useState
  const [name, setName] = React.useState(initialName);

  function handleChange(event) {
    // 🐨 atualize o nome aqui baseado em event.target.value
    setName(event.target.value);
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Nome: </label>
        <input onChange={handleChange} id="name" value={name} />
      </form>
      {name ? <strong>Olá {name}</strong> : 'Por favor, informe seu nome'}
    </div>
  );
}

function Exercicio01() {
  return <Greeting initialName="Turíbio" />;
}

export default Exercicio01;
