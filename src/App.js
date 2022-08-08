import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Header } from './components/Header';
import { ProductosLista } from './components/productos/index'



function App() {
  return (
<div className='App'>
  <Header />
  <ProductosLista />
  
  

 

</div>

  );
}

export default App;
