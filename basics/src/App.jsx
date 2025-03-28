import Counter from "./components/Counter";
import Greet from "./components/Greet";
import Home from "./Home";
import { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <>
      <Home name = "Kiran" />
      <Home age = {23} />
      <Greet />
      <Counter />
      </>
    )
  }
}



//Functional Component(above is the class component we can write in any of them)
/*
function App() {
  return (
    <>
   <Home name = "Kiran" />
   <Home age = "23" />
    </>
  )
}

export default App;
 */