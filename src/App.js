import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Menu from './components/Menu/menu.js';
// import Main from './components/Main/main.js';
import Main from './pages/main/main';
import PhotoGallery from './pages/photoGallery/photoGallery';
import Footer from './components/footer/footer';

function App() {
  return (
    <Router>
      <Menu/>
      <Switch>
        <Route exact path="/index" component={Main} />
        <Route exact path="/photoGallery" component={PhotoGallery} />
        
      </Switch>

      <Footer/>
      
    </Router>
    
  );
}

export default App;
