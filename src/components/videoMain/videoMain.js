import React, {Component} from 'react';

import video from '../../assets/videos/photo.mp4';
import './style.css';

class videoMain extends Component{
    render(){
        return(
            <div className="videoContainer">
                <div className="videoSombra"></div>
                <video className="video" autoPlay loop muted>
                    <source src={video} type='video/mp4' />
                </video>

                <div className="videoTexto">
                    <h1>Texto aqui</h1>
                </div>
            </div>
        )
    }
}

export default videoMain;