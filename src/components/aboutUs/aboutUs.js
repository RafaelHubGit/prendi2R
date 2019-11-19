import React, {Component} from 'react';

import './style.css';

import firma from '../../assets/imagenes/firma.jpg';
import fotografo from '../../assets/imagenes/fotografo.jpg';

class aboutUs extends Component{
    render(){
        return(
            <div className="aboutUsContainer">
                <div className="aboutText">
                    <div className="aboutNosotros">
                        Sobre Nosotros
                    </div>
                    <div className="aboutSombraText">
                        <p>Sobre <br/><span>Nosotros</span></p>
                    </div>
                    <div className="aboutTexto">
                        Texto inspirador aqui <br></br>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Repudiandae libero nesciunt pariatur impedit, quod quas mollitia 
                        maxime molestiae quae sequi ab, neque qui! Quae, repellendus eligendi sunt 
                        ipsum fuga nihil?
                    </div>
                    <div className="aboutFirma">
                        <img src={firma} alt=""/>
                    </div>
                </div>
                <div className="aboutImage">
                    <img src={fotografo} alt=""/>
                </div>
                
            </div>
        )
    }
}

export default aboutUs;