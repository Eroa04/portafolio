import './Informacion.css';
import foto from './foto.PNG';
import {
    Link
  } from "react-router-dom";

function Informacion (){
    return(
        <div className="izquierda">
            <div className="foto">
                <img src={foto} alt="Mi foto"/>
            </div>
            <div className="sobremi">
                <span className="texto1">SOBRE MI</span><br/><br/>
                <span className="texto2">Alto sentido de responsabilidad, criterio para resolver cualquier situación,
                     compromiso y disposición al aprendizaje, excelentes relaciones interpersonales, 
                     capacidad de liderazgo, con buen sentido de organización y disposición para laborar 
                     en grupo e individual.</span>
            </div>
            <div className="contacto">
                <span className="texto1">CONTACTO</span><br/><br/>
                <span><i class="fas fa-phone"></i><a><Link to="/telefono">Teléfono</Link></a></span><br/>
                <span><i class="fas fa-map-marker"></i><a><Link to="/ubicacion">Ubicación</Link></a></span><br/>
                <span><i class="fas fa-envelope"></i><a><Link to="/.">Correo</Link></a></span>
            </div>
            <div className="habilidades">
                <span className="texto1">HABILIDADES</span><br/><br/>
                <span className="texto2">Atencion al cliente</span>
                <progress id="file" max="100" value="80"></progress><br/><br/>
                <span className="texto2">Programación Back-end</span>
                <progress id="file" max="100" value="60"></progress><br/><br/>
                <span className="texto2">Programación Front-end</span>
                <progress id="file" max="100" value="70"></progress><br/><br/>
                <span className="texto2">Base de datos</span>
                <progress id="file" max="100" value="55"></progress>
            </div>
        </div>
    )
}

export default Informacion;