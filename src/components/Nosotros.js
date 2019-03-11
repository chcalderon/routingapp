import React, { Component } from 'react';
import './Nosotros.css';

class Nosotros extends Component {
    state = {  };
    
    render() {
        return (
            <div className="contenedor-nosotros">
                <div className="imagen">
                    <img src="/img/camisa_1.png" alt="imagen nosotros" />
                </div>
                <div className="contenido">
                    <h2>Sobre Nosotros</h2>
                    <p>Proin feugiat aliquam tortor, id hendrerit urna semper pulvinar. Nullam iaculis aliquam risus, nec tempus quam condimentum ut. Proin nibh nisl, imperdiet non dictum quis, sodales quis risus. Lorem Ipsum gravida rhoncus. Proin sollicitudin mi eget felis congue sed adipiscing tellus vulputate. Cras suscipit aliquam sapien, non pretium turpis ullamcorper vitae. Aenean vitae libero velit, nec malesuada diam. Curabitur imperdiet porta sapien, sed luctus sapien sollicitudin at.</p>
                </div>
            </div>           
        );
    }
}

export default Nosotros;