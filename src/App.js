// import * as style from './style' //-> metodo fuori dal componente
import React from "react";
import Component1 from "./functional/component1";
import Container1 from "./containers/container1";

function App() {
  // statornando di moda scrivere stile in linea per questioni di comodita nelle condizioni metodo dentro al componente 
  // const style = {
  //   border: 'solid',
  //   backgroundColor: 'red',
  //   height: '30px',
  //   width: '100px'
  // }
  // let pippo = 'ciao'
  // const [count, setCount] = useState(0);
  // const var1 = {
  //   key1: 'some data'
  // }

  return (
    <div className="App">
      <header className="App-header">
        <Container1 nikcname="pippone"/>
        <Component1 name="pippo" age={25}/>
        {/* react {pippo}
        <div style={style.style_extern}></div>
        <h2>Counter: {count}</h2>
        <button onClick={() => setCount(count - 1) }>decrement--</button>
        <button onClick={() => setCount(count + 1) }>increment++</button>
        <br/>
        {var1.key1} */}

      </header>
    </div>
  );
}

export default App;
