import React from 'react';
import './App.css';
import NavBar from "./NavBar/NavBar.js"
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Illustration from './Components/Illustration.js'
import Design from './Components/Design.js'
import About from './Components/About.js'


function App() {
  return (
    <Router>
    	<NavBar/>
	    <Switch>
	      <Route path="/Illustration" component={Illustration} />
	      <Route path="/Design" component={Design} />
	      <Route path="/About" component={About} />
	    </Switch>
    </Router>
  );
}

export default App;
