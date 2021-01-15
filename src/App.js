import React from 'react';
import  { Breakpoint, BreakpointProvider } from 'react-socks';
import NavBar from "./Components/NavBar.js"
import { BrowserRouter as Router, Switch, Route, withRouter} from 'react-router-dom';
import Illustration from './Components/Illustration.js'
import Design from './Components/Design.js'
import About from './Components/About.js'
import { setDefaultBreakpoints } from 'react-socks';

import EvenOdd from './Components/Design/EvenOdd.js'
import SherlockBonesSeaCreature from './Components/Design/SherlockBonesSeaCreature.js'
import MrWalker from './Components/Design/MrWalker.js'
import OneSmartSheep from './Components/Design/OneSmartSheep.js'
import LakeWild from './Components/Design/RescueLakeWild.js'
import ASingleShard from './Components/Design/ASingleShard.js'
import WinterborneHome1 from './Components/Design/WinterborneHome1.js'
import WinterborneHome2 from './Components/Design/WinterborneHome2.js'
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
import WaywardCreatures from './Components/Design/WaywardCreatures.js'

import BasketballAnimals from './Components/Illustration/BasketballAnimals.js'
import ChristmasCard from './Components/Illustration/ChristmasCard.js'
import Emperor from './Components/Illustration/Emperor.js'
import IDEO from './Components/Illustration/IDEO.js'
import LittleRedRidingHood from './Components/Illustration/LittleRedRidingHood.js'
import RapBattle from './Components/Illustration/RapBattle.js'
import SecretSantaSociety from './Components/Illustration/SecretSantaSociety.js'
import StarvingPanda from './Components/Illustration/StarvingPanda.js'
import VeggieAnimals from './Components/Illustration/VeggieAnimals.js'
import Buddha from './Components/Illustration/Buddha.js'


function App() {
  	return (
	    <Router>
	    	<NavBar />    
		    <Switch>
		    	<Route exact path="/" component={Design} />
			    <Route exact path="/Illustration" component={Illustration} />
				<Route exact path="/BookDesign" component={Design} />
				<Route path="/About" component={About} />

				<Route path="/BookDesign/EvenOdd" component={EvenOdd} />
				<Route path="/BookDesign/SherlockBonesSeaCreature" component={SherlockBonesSeaCreature} />
				<Route path="/BookDesign/MrWalker" component={MrWalker} />
				<Route path="/BookDesign/OneSmartSheep" component={OneSmartSheep} />
				<Route path="/BookDesign/LakeWild" component={LakeWild} />
				<Route path="/BookDesign/ASingleShard" component={ASingleShard} />
				<Route path="/BookDesign/WinterborneHomeVV" component={WinterborneHome1} />
				<Route path="/BookDesign/WinterborneHomeMM" component={WinterborneHome2} />
				<Route path="/BookDesign/BubbleTea" component={BubbleTea} />
				<Route path="/BookDesign/Chocolate" component={Chocolate} />
				<Route path="/BookDesign/ClosedForSeason" component={ClosedForSeason} />
				<Route path="/BookDesign/DollGarden" component={DollGarden} />
				<Route path="/BookDesign/OfAFeather" component={Feather} />
				<Route path="/BookDesign/GhostCrutchfield" component={GhostCrutchfield} />
				<Route path="/BookDesign/LightsWonderRock" component={LightsWonderRock} />
				<Route path="/BookDesign/MagicHouse" component={MagicHouse} />
				<Route path="/BookDesign/MrComplain" component={MrComplain} />
				<Route path="/BookDesign/Podcast" component={Podcast} />
				<Route path="/BookDesign/SherlockBones" component={SherlockBones} />
				<Route path="/BookDesign/Strength" component={Strength} />
				<Route path="/BookDesign/TimeForAndrew" component={TimeForAndrew} />
				<Route path="/BookDesign/WaywardCreatures" component={WaywardCreatures} />

				<Route path="/Illustration/BasketballAnimals" component={BasketballAnimals} />
				<Route path="/Illustration/ChristmasCard" component={ChristmasCard} />
				<Route path="/Illustration/Emperor" component={Emperor} />
				<Route path="/Illustration/IDEO" component={IDEO} />
				<Route path="/Illustration/LittleRedRidingHood" component={LittleRedRidingHood} />
				<Route path="/Illustration/RapBattle" component={RapBattle} />
				<Route path="/Illustration/SecretSantaSociety" component={SecretSantaSociety} />
				<Route path="/Illustration/StarvingPanda" component={StarvingPanda} />
				<Route path="/Illustration/VeggieAnimals" component={VeggieAnimals} />
				<Route path="/Illustration/Buddha" component={Buddha} />

		    </Switch>
	    </Router>
  );
}

export default App;
