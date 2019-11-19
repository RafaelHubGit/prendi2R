import React, {Component} from 'react';

import VideoMain from '../../components/videoMain/videoMain';
import AboutUs from '../../components/aboutUs/aboutUs';
import Services from '../../components/services/services';

class main extends Component{
    render(){
        return(
            <div className="container-fluid">
                <VideoMain />
                <Services />
                <AboutUs />
            </div>
        )
    }
}

export default main;