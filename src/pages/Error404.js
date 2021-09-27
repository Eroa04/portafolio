import './Error404.css';
import {
    Link
  } from "react-router-dom";

function Error404 () {
    return (
        <div className="error">
            <h1>ERROR</h1>
            <h2>404</h2>
            <i class="fas fa-unlink"></i><br/><br/>
            <span>Pagina no encontrada</span><br/>
            <span><a><Link to="/">Volver al inicio</Link></a></span>
        </div>
    )
}

export default Error404;