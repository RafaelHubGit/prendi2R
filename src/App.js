import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Menu from './components/Menu/menu.js';
import Main from './components/Main/main.js';

function App() {
  return (
    <Router>
      <Menu/>
      <Switch>
        <Route exact path="/index" component={Main} />
        
      </Switch>
      
    </Router>
    
  );
}

export default App;
