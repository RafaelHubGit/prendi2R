import React, {Component} from 'react';

import './style.css';

var phone = require('../../assets/icons/phone-y.png');
var map = require('../../assets/icons/map-y.png');
var letter = require('../../assets/icons/letter-y.png');

var facebook = require('../../assets/icons/facebook.png');
var twitter = require('../../assets/icons/twitter.png');
var youtube = require('../../assets/icons/youtube.png');
var instagram = require('../../assets/icons/instagram.png');

class footer extends Component{
    render(){
        return(
            <div className="footerContainer">
                <div className="footerIconsContainer">
                    <div className="footerIconDates">
                        <div className="footerIconDatesIcon">
                            <img src={phone} alt=""/>
                        </div>
                        <div className="footerIconDatesText">
                            55-55-55-55
                        </div>
                    </div>
                    <div className="footerIconDates">
                        <div className="footerIconDatesIcon">
                            <img src={map} alt=""/>
                        </div>
                        <div className="footerIconDatesText">
                            Alfonso Del la Cuadra #53 Col. Centro Historico
                        </div>
                    </div>
                    <div className="footerIconDates">
                        <div className="footerIconDatesIcon">
                            <img src={letter} alt=""/>
                        </div>
                        <div className="footerIconDatesText">
                            e-mail@example.com.mx
                        </div>
                    </div>
                </div>
                <div className="footerInfoContainer">
                    <div className="footerInfo">
                        <div className="footerUs">
                            <div className="footerUsPrendi2">
                                Prendi<span>2</span>
                            </div>
                            <div className="footerUsText">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                A deserunt ex, ipsum, molestiae ratione quos necessitatibus 
                                ipsam debitis maxime, minus odio! Sed pariatur excepturi, eum 
                                voluptate ratione exercitationem voluptates accusantium.
                            </div>
                        </div>
                        <div className="footerSiteMap">
                            <ul>
                                <li><a href="#">Uno</a></li>
                                <li><a href="#">dos</a></li>
                                <li><a href="#">tres</a></li>
                                <li><a href="#">cuatro</a></li>
                                <li><a href="#">cinco</a></li>
                                <li><a href="#">seis</a></li>
                            </ul>
                        </div>
                        <div className="footerSocialN">
                            <a href="#">
                                <img src={facebook} alt=""/>
                            </a>
                            <a href="#">
                                <img src={twitter} alt=""/>
                            </a>
                            <a href="#">
                                <img src={youtube} alt=""/>
                            </a>
                            <a href="#">
                                <img src={instagram} alt=""/>
                            </a>
                        </div>
                    </div>
                    <div className="footerRightsR">
                        Prendi2 © 2019 All Rights Reserved Terms of Use and Privacy Policy
                    </div>
                </div>
            </div>
        )
    }
}

export default footer;