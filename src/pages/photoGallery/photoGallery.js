import React, {Component} from 'react';

import './style.css';

var cam = require('../../assets/imagenes/cam.jpg');
var cm = require('../../assets/imagenes/cm.jpg');

class photoGallery extends Component{
    render(){
        return(
            <div className="photoGalleryContainer">
                <div className="galleryContainer">
                    <div className="galleryPhoto">
                        <div className="galleryCheck">
                            <input id="lists[Travel]" type="checkbox" name="lists[Travel]" />
                            <label for="lists[Travel]"></label>
                        </div>
                        <img src={cm} alt=""/>
                    </div>
                    <div className="galleryPhoto">
                        <div className="galleryCheck">
                            <input id="lists[Travel]" type="checkbox" name="lists[Travel]" />
                            <label for="lists[Travel]"></label>
                        </div>
                        <img src={cm} alt=""/>
                    </div>
                    <div className="galleryPhoto">
                        <div className="galleryCheck">
                            <input id="lists[Travel]" type="checkbox" name="lists[Travel]" />
                            <label for="lists[Travel]"></label>
                        </div>
                        <img src={cm} alt=""/>
                    </div>
                    <div className="galleryPhoto">
                        <div className="galleryCheck">
                            <input id="lists[Travel]" type="checkbox" name="lists[Travel]" />
                            <label for="lists[Travel]"></label>
                        </div>
                        <img src={cm} alt=""/>
                    </div>

                </div>
                <div className="contador">
                    <p>500</p>
                </div>
                <div className="photoContainer">
                    <div className="photoPhoto">

                    </div>
                </div>
            </div>
        )
    }
}

export default photoGallery;