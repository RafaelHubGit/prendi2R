import React, {Component} from 'react';

import sample from '../../assets/videos/water.mp4';
import firma from './firma.jpg';
import fotografo from './fotografo.jpg';
import './Righteous-Regular.ttf';
import './PlayfairDisplaySC-Italic.ttf';
import './Pacifico-Regular.ttf';


class main extends Component{

    render (){
        return(
            <div className="containerr">

                <div className="videoContainer">
                    <div className="videoSombra"></div>
                    <video className="video" autoPlay loop muted>
                        <source src={sample} type='video/mp4' />
                    </video>

                    <div className="videoTexto">
                        <h1>Texto aqui</h1>
                    </div>
                </div>

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
                

            </div>
        )
    }
}

export default main;