import './Home.css';
import {
    Link
  } from "react-router-dom";

  function Home () {
    return (
        <div className="pag">
        <div className="prin">
          <h1>PAGINA PRINCIPAL<i class="fas fa-home"></i></h1>
        </div>
        <div className="link">
        <a><Link to="/portafolio">Ir al portafolio</Link></a>
        </div>
        </div>
    )
}

export default Home;