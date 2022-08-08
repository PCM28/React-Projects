import './App.scss';
import Title from "./components/Title";//Componente agregado
import Subtitle from './components/Subtitle';//Componente agregado

const App = () => {
  const hero = 'The Punisher';
  const isOpen = true;
  return (
    <div className="app">
      <Title />
      <Subtitle name="Que Pasaaa"/>
      <Subtitle name={"Señorrr"}/>
      <Subtitle name={true}/>
      <Subtitle name={890}/>

      <h2>El super hero es: {hero}</h2>
      <h2>Vamos a contar {7+8+9}</h2>
      <h2>{isOpen ? 'Está abierto' : 'Está cerrado'}</h2>
      {isOpen
        ? <div>Está abierto</div>
        : <div>Está cerrado, a buscarte otrooo</div>
      }
    </div>
  );
}

export default App;
