import React, {Component} from 'react';

import './style.css';

var computerIcon = require('../../assets/icons/camera.png');
var drone = require('../../assets/icons/drone.png');
var film = require('../../assets/icons/film.png');
var photograph = require('../../assets/icons/photograph.png');
var computer = require('../../assets/icons/computer.png');
var videoC = require('../../assets/icons/video-camera.png');



class services extends Component{
    render(){
        return(
            <div className="servicesContainer">
                <div className="serviceTitle">
                    <span className="lineTitle"></span>
                    <div className="title">
                        Nuestros Servicios
                    </div>
                </div>
                <div className="servicesContent">
                    <div className="contentDiv">
                        <div className="serviceicon">
                            <img src={computerIcon} alt=""/>
                        </div>
                        <div className="serviceText">
                            <p>Fotografía</p>                            
                            <span>Leer más...</span>
                        </div>
                    </div>
                    <div className="contentDiv">
                        <div className="serviceicon">
                            <img src={drone} alt=""/>
                        </div>
                        <div className="serviceText">
                            <p>Fotografía Aerea</p>                            
                            <span>Leer más...</span>
                        </div>
                    </div>
                    <div className="contentDiv">
                        <div className="serviceicon">
                                <img src={film} alt=""/>
                        </div>
                        <div className="serviceText">
                            <p>Servicio3</p>                            
                            <span>Leer más...</span>
                        </div>
                    </div>
                    <div className="contentDiv">
                        <div className="serviceicon">
                            <img src={computer} alt=""/>
                        </div>
                        <div className="serviceText">
                            <p>Servicio4</p>                            
                            <span>Leer más...</span>
                        </div>
                    </div>
                    <div className="contentDiv">
                        <div className="serviceicon">
                            <img src={photograph} alt=""/>
                        </div>
                        <div className="serviceText">
                            <p>Servicio5</p>                            
                            <span>Leer más...</span>
                        </div>
                    </div>
                    <div className="contentDiv">
                        <div className="serviceicon">
                            <img src={videoC} alt=""/>
                        </div>
                        <div className="serviceText">
                            <p>Servicio6</p>                            
                            <span>Leer más...</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default services;