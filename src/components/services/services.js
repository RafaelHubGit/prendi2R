import React, {Component} from 'react';

import './style.css';
import './styleCard.css';

// import './script';

// var Vue = require('../../../public/script');

class services extends Component{
    render(){
        return(
            <div className="servicesContainer">
                <div className="serviceText">
                    <h1>Servicios</h1>
                </div>
                
                <div className="servicesCards">
                    <div className="example-2 card">
                        <div className="wrapper uno">
                        {/* <div className="header">
                            <div className="date">
                            <span className="day">12</span>
                            <span className="month">Aug</span>
                            <span className="year">2016</span>
                            </div>
                            <ul className="menu-content">
                            <li>
                                <a href="#" className="fa fa-bookmark-o"></a>
                            </li>
                            <li><a href="#" className="fa fa-heart-o"><span>18</span></a></li>
                            <li><a href="#" className="fa fa-comment-o"><span>3</span></a></li>
                            </ul>
                        </div> */}
                        <div className="data">
                            <div className="content">
                            <span className="author"></span>
                            <h1 className="title"><a href="#">PhotoShot</a></h1>
                            <p className="text">Texto con choro de fotografia</p>
                            <a href="#" className="button">Ver más.</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="example-2 card ">
                        <div className="wrapper dos">
                            {/* <div className="header">
                                <div className="date">
                                <span className="day">12</span>
                                <span className="month">Aug</span>
                                <span className="year">2016</span>
                                </div>
                                <ul className="menu-content">
                                <li>
                                    <a href="#" className="fa fa-bookmark-o"></a>
                                </li>
                                <li><a href="#" className="fa fa-heart-o"><span>18</span></a></li>
                                <li><a href="#" className="fa fa-comment-o"><span>3</span></a></li>
                                </ul>
                            </div> */}
                            <div className="data">
                                <div className="content">
                                <span className="author"></span>
                                <h1 className="title"><a href="#">Fotografía aerea</a></h1>
                                <p className="text">Texto con choro de fotografia</p>
                                <a href="#" className="button">Ver más.</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="example-2 card ">
                        <div className="wrapper tres">
                        {/* <div className="header">
                            <div className="date">
                            <span className="day">12</span>
                            <span className="month">Aug</span>
                            <span className="year">2016</span>
                            </div>
                            <ul className="menu-content">
                            <li>
                                <a href="#" className="fa fa-bookmark-o"></a>
                            </li>
                            <li><a href="#" className="fa fa-heart-o"><span>18</span></a></li>
                            <li><a href="#" className="fa fa-comment-o"><span>3</span></a></li>
                            </ul>
                        </div> */}
                        <div className="data">
                            <div className="content">
                            <span className="author"></span>
                            <h1 className="title"><a href="#">Fotografía aerea</a></h1>
                            <p className="text">Texto con choro de fotografia</p>
                            <a href="#" className="button">Ver más.</a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default services;