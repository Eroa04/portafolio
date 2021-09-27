import './Ubicacion.css';

function Ubicacion (){
    return(
    <div className="ubi">
      <h1>UBICACION<i class="fas fa-map-marker-alt"></i></h1>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15904.361281474708!2d-74.12673372315089!3d4.7543298447530296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f847bd850f595%3A0xf8346cd4a9e20a39!2zQmlsYmFvLCBTdWJhLCBCb2dvdMOh!5e0!3m2!1ses!2sco!4v1632719109611!5m2!1ses!2sco" width="600" height="450" ></iframe>
    </div>
    )
}

export default Ubicacion;