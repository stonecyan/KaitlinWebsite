import React from 'react';
import  { Breakpoint, BreakpointProvider } from 'react-socks';
import NavBar from "./Components/NavBar.js"
import { BrowserRouter as Router, Switch, Route, withRouter} from 'react-router-dom';
import Illustration from './Components/Illustration.js'
import Design from './Components/Design.js'
import About from './Components/About.js'
import { setDefaultBreakpoints } from 'react-socks';

import BubbleTea from './Components/Design/BubbleTea.js'
import Chocolate from './Components/Design/Chocolate.js'
import ClosedForSeason from './Components/Design/ClosedForSeason.js'
import DollGarden from './Components/Design/DollGarden.js'
import Feather from './Components/Design/Feather.js'
import GhostCrutchfield from './Components/Design/GhostCrutchfield.js'
import LightsWonderRock from './Components/Design/LightsWonderRock.js'
import MagicHouse from './Components/Design/MagicHouse.js'
import MrComplain from './Components/Design/MrComplain.js'
import Podcast from './Components/Design/Podcast.js'
import SherlockBones from './Components/Design/SherlockBones.js'
import Strength from './Components/Design/Strength.js'
import TimeForAndrew from './Components/Design/TimeForAndrew.js'

import BasketballAnimals from './Components/Illustration/BasketballAnimals.js'
import ChristmasCard from './Components/Illustration/ChristmasCard.js'
import Emperor from './Components/Illustration/Emperor.js'
import IDEO from './Components/Illustration/IDEO.js'
import LittleRedRidingHood from './Components/Illustration/LittleRedRidingHood.js'
import RapBattle from './Components/Illustration/RapBattle.js'
import SecretSantaSociety from './Components/Illustration/SecretSantaSociety.js'
import StarvingPanda from './Components/Illustration/StarvingPanda.js'
import VeggieAnimals from './Components/Illustration/VeggieAnimals.js'


function App() {
  	return (
	    <Router>
	    	<NavBar />    
		    <Switch>
		    	<Route exact path="/" component={Illustration} />
			    <Route exact path="/Illustration" component={Illustration} />
				<Route exact path="/Design" component={Design} />
				<Route path="/About" component={About} />

				<Route path="/Design/BubbleTea" component={BubbleTea} />
				<Route path="/Design/Chocolate" component={Chocolate} />
				<Route path="/Design/ClosedForSeason" component={ClosedForSeason} />
				<Route path="/Design/DollGarden" component={DollGarden} />
				<Route path="/Design/OfAFeather" component={Feather} />
				<Route path="/Design/GhostCrutchfield" component={GhostCrutchfield} />
				<Route path="/Design/LightsWonderRock" component={LightsWonderRock} />
				<Route path="/Design/MagicHouse" component={MagicHouse} />
				<Route path="/Design/MrComplain" component={MrComplain} />
				<Route path="/Design/Podcast" component={Podcast} />
				<Route path="/Design/SherlockBones" component={SherlockBones} />
				<Route path="/Design/Strength" component={Strength} />
				<Route path="/Design/TimeForAndrew" component={TimeForAndrew} />

				<Route path="/Illustration/BasketballAnimals" component={BasketballAnimals} />
				<Route path="/Illustration/ChristmasCard" component={ChristmasCard} />
				<Route path="/Illustration/Emperor" component={Emperor} />
				<Route path="/Illustration/IDEO" component={IDEO} />
				<Route path="/Illustration/LittleRedRidingHood" component={LittleRedRidingHood} />
				<Route path="/Illustration/RapBattle" component={RapBattle} />
				<Route path="/Illustration/SecretSantaSociety" component={SecretSantaSociety} />
				<Route path="/Illustration/StarvingPanda" component={StarvingPanda} />
				<Route path="/Illustration/VeggieAnimals" component={VeggieAnimals} />

		    </Switch>
	    </Router>
  );
}

export default App;
