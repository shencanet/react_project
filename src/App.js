import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Amanda from './components/Amanda';
import Emma from './components/Emma';
import Shawn from './components/Shawn';
import Navegacion from './components/Navegacion';


function App() {
  return (
 <Router>
  <Route path='/Amanda' component={Amanda} />
  <Route path='/Emma' component={Emma} />
  <Route path='/Shawn' component={Shawn} />
  <Navegacion/>
 </Router>

  );
}

export default App;
