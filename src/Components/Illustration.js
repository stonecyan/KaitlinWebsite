import React from "react";
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router'
import './Illustration.css'

import SecretSantaSociety from '../Images/Illustration/SecretSantaSocietyChildrensBookIllustration.jpg'
import RapBattle from '../Images/Illustration/RapBattlePoster.jpg'
import Emperor from '../Images/Illustration/EmperorSeedChildrensBook.jpg'
import LittleRed from '../Images/Illustration/LittleRedRidingHood.jpg'
import MomBuddha from '../Images/Illustration/MomBuddhaMeditation.jpg'
import IDEO from '../Images/Illustration/IDEO.jpg'
import VeggieAnimal from '../Images/Illustration/VeggieAnimal.jpg'
import BearBasketball from '../Images/Illustration/BearBasketball.jpg'
import ChristmasCard from '../Images/Illustration/ChristmasCard.jpg'
import StarvingPanda from '../Images/Illustration/StarvingPanda.jpg'

const Illustration = props => {
	return(
		<div>
			<div className="illustration-grid-container">
		        <div id="secretSanta" className="illustrationProject">
		            <img className="gridImage" src={SecretSantaSociety} />
		        </div>
		        <div className="illustrationOverlay" id="secretSantaOverlay">
		            <h3>children's book</h3>
		            <Link to="/Illustration/SecretSantaSociety">Secret Santa Society</Link>
		        </div>

		        <div id="rapBattle" className="illustrationProject">
	            	<img className="gridImage" src={RapBattle} />
		        </div>
		        <div className="illustrationOverlay" id="rapBattleOverlay">
	                <h3>Commission</h3>
	            	<Link to="/Illustration/RapBattle">Autumn Moon Rap Battle</Link>   
		        </div>

		        <div id="emperor" className="imageOverlay">
		            <img className="gridImage" src={Emperor} />
		        </div>
		        <div className="illustrationOverlay" id="emperorOverlay">
		            <h3>Children's Book</h3>
		            <Link to="/Illustration/Emperor">Emperor's Seed and other stories</Link>
		        </div>

		        <div id="redriding" className="imageOverlay">
		            <img className="gridImage" src={LittleRed} />
		        </div>
		        <div className="illustrationOverlay" id="redridingOverlay">
		            <h3>children's book</h3>
		            <Link to="/Illustration/LittleRedRidingHood">Little Red Riding Hood</Link>
		        </div>

	 	        <div id="buddha" className="imageOverlay">
		            <img className="gridImage" src={MomBuddha} />
		        </div>
		        <div className="illustrationOverlay" id="buddhaOverlay">
		            <h3>Personal Project</h3>
		            <Link to="/Illustration/Buddha">Portrait</Link>
		        </div>

		        <div id="ideo" className="imageOverlay">
		            <img className="gridImage" src={IDEO} />
		        </div>
		        <div className="illustrationOverlay" id="ideoOverlay">
		            <h3>Work for Hire</h3>
		            <Link to="/Illustration/IDEO">EC Book Challenge</Link>
		        </div>

		        <div id="veggie" className="imageOverlay">
		            <img className="gridImage" src={VeggieAnimal} />
		        </div>
		        <div className="illustrationOverlay" id="veggieOverlay">
		            <h3>Personal Project</h3>
		            <Link to="/Illustration/VeggieAnimals">Veggie Animals</Link>
		        </div>

		        <div id="bear" className="imageOverlay">
		            <img className="gridImage" src={BearBasketball} />
		        </div>
		        <div className="illustrationOverlay" id="bearOverlay">
		            <h3>Personal Project</h3>
		            <Link to="/Illustration/BasketballAnimals">Basketball Animal Series</Link>
		        </div>

		        <div id="christmas" className="imageOverlay">
		            <img className="gridImage" src={ChristmasCard} />
		        </div>
		        <div className="illustrationOverlay" id="christmasOverlay">
		            <h3>Personal Project</h3>
		            <Link to="/Illustration/ChristmasCard">Christmas Card</Link>
		        </div>

		        <div id="panda" className="imageOverlay">
		            <img className="gridImage" src={StarvingPanda} />
		        </div>
		        <div className="illustrationOverlay" id="pandaOverlay">
		            <h3>Commission</h3>
		            <Link to="/Illustration/StarvingPanda">Starving Panda</Link>
		        </div>
		    </div>
	    	<div className="illustration-mobile">
	    		<Link to="/Illustration/ChristmasCard"><img className="gridImage" src={ChristmasCard} /></Link>
	    		<Link to="/Illustration/StarvingPanda"><img className="gridImage" src={StarvingPanda} /></Link>
	    		<Link to="/Illustration/Emperor"><img className="gridImage" src={Emperor} /></Link>
	    		<Link to="/Illustration/LittleRedRidingHood"><img className="gridImage" src={LittleRed} /></Link>
	    		<Link to="/Illustration/SecretSantaSociety"><img className="gridImage" src={SecretSantaSociety} /></Link>
	    		<Link to="/Illustration/IDEO"><img className="gridImage" src={IDEO} /></Link>
	    		<Link to="/Illustration/Buddha"><img className="gridImage" src={MomBuddha} /></Link>
	    		<Link to="/Illustration/BasketballAnimals"><img className="gridImage" src={BearBasketball} /></Link>
	    		<Link to="/Illustration/RapBattle"><img className="gridImage" src={RapBattle} /></Link>   
	    		<Link to="/Illustration/VeggieAnimals"><img className="gridImage" src={VeggieAnimal} /></Link>
	    	</div>
		</div>
		
	);
};

export default Illustration