import './App.css';
import Portafolio from './pages/Portafolio.js';
import Error404 from './pages/Error404.js';
import Home from './pages/Home.js';
import Ubicacion from './pages/Ubicacion.js';
import Telefono from './pages/Telefono.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"> 
            <Home />
        </Route>
        <Route path="/portafolio">
            <Portafolio />
        </Route>
        <Route path="/ubicacion">
            <Ubicacion />
        </Route>
        <Route path="/telefono">
            <Telefono />
        </Route>
        <Route path="*">
            <Error404 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
