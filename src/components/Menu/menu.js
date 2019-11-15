import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
import './style.css';

import $ from 'jquery';

class menu extends Component{

    componentDidMount(){
        $(window).scroll(function(event) {
            var scrollLeft = $(window).scrollLeft();
            var scrollTop = $(window).scrollTop();
            // console.log("arriba "+scrollTop);
            // console.log("Horizontal "+scrollLeft);

            if(scrollTop === 0 ){
                // console.log("Va a hacer algo ");
                $("nav").removeClass('navclassOpaque');
                $("nav").addClass('navclassTransparent');

                $(".brand-logo").removeClass('brand-logo-opaque');
                $(".brand-logo").addClass('brand-logo-transparente');

                $("#nav-mobile li a").removeClass('aMenuOpaque');
                $("#nav-mobile li a").addClass('aMenuTransparente');


            }else if(scrollTop > 100){
                // console.log("MAYOR A ");
                $("nav").removeClass('navclassTransparent');
                $("nav").addClass('navclassOpaque');

                $(".brand-logo").removeClass('brand-logo-transparente');
                $(".brand-logo").addClass('brand-logo-opaque');

                $("#nav-mobile li a").removeClass('aMenuTransparente');
                $("#nav-mobile li a").addClass('aMenuOpaque');
            }
          });
    }

    render(){
        return(
            <nav>
                <div className="nav-wrapper">
                <a href="#" className="brand-logo">Prendi<span>2</span> </a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="sass.html">Sass</a></li>
                    <li><a href="badges.html">Components</a></li>
                    <li><a href="collapsible.html">JavaScript</a></li>
                </ul>
                </div>
            </nav>
        )
    }
}


export default menu;