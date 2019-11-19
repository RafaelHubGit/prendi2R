import React, {Component} from 'react';

import './style.css';
import './styleCard.css';

// import './script';

// var Vue = require('../../../public/script');

class services extends Component{
    render(){
        return(
            <div className="servicesContainer">
                <div class="example-2 card">
                    <div class="wrapper uno">
                    {/* <div class="header">
                        <div class="date">
                        <span class="day">12</span>
                        <span class="month">Aug</span>
                        <span class="year">2016</span>
                        </div>
                        <ul class="menu-content">
                        <li>
                            <a href="#" class="fa fa-bookmark-o"></a>
                        </li>
                        <li><a href="#" class="fa fa-heart-o"><span>18</span></a></li>
                        <li><a href="#" class="fa fa-comment-o"><span>3</span></a></li>
                        </ul>
                    </div> */}
                    <div class="data">
                        <div class="content">
                        <span class="author"></span>
                        <h1 class="title"><a href="#">PhotoShot</a></h1>
                        <p class="text">Texto con choro de fotografia</p>
                        <a href="#" class="button">Ver más.</a>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="example-2 card ">
                    <div class="wrapper dos">
                    {/* <div class="header">
                        <div class="date">
                        <span class="day">12</span>
                        <span class="month">Aug</span>
                        <span class="year">2016</span>
                        </div>
                        <ul class="menu-content">
                        <li>
                            <a href="#" class="fa fa-bookmark-o"></a>
                        </li>
                        <li><a href="#" class="fa fa-heart-o"><span>18</span></a></li>
                        <li><a href="#" class="fa fa-comment-o"><span>3</span></a></li>
                        </ul>
                    </div> */}
                    <div class="data">
                        <div class="content">
                        <span class="author"></span>
                        <h1 class="title"><a href="#">Fotografía aerea</a></h1>
                        <p class="text">Texto con choro de fotografia</p>
                        <a href="#" class="button">Ver más.</a>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="example-2 card ">
                    <div class="wrapper tres">
                    {/* <div class="header">
                        <div class="date">
                        <span class="day">12</span>
                        <span class="month">Aug</span>
                        <span class="year">2016</span>
                        </div>
                        <ul class="menu-content">
                        <li>
                            <a href="#" class="fa fa-bookmark-o"></a>
                        </li>
                        <li><a href="#" class="fa fa-heart-o"><span>18</span></a></li>
                        <li><a href="#" class="fa fa-comment-o"><span>3</span></a></li>
                        </ul>
                    </div> */}
                    <div class="data">
                        <div class="content">
                        <span class="author"></span>
                        <h1 class="title"><a href="#">Fotografía aerea</a></h1>
                        <p class="text">Texto con choro de fotografia</p>
                        <a href="#" class="button">Ver más.</a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default services;