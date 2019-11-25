import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Menu from './components/Menu/menu.js';
// import Main from './components/Main/main.js';
import Main from './pages/main/main';
import Footer from './components/footer/footer';

function App() {
  return (
    <Router>
      <Menu/>
      <Switch>
        <Route exact path="/index" component={Main} />
        
      </Switch>

      <Footer/>
      
    </Router>
    
  );
}

export default App;
