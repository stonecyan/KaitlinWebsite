import React, {useState} from "react";
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router'
import './Illustration.css'
import Burger from './Hamburger.js'
import MobileNavBar from './MobileNavBar.js'

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
import PotatoChips from '../Images/Illustration/PotatoChipsCover.jpg'
import Covid from '../Images/Illustration/Covid.jpg'
import MedSchool from '../Images/Illustration/MedSchool.jpg'
import MinnieGary from '../Images/Illustration/MinnieGaryCover.jpg'
import YogaTiger from '../Images/Illustration/YogaTiger.jpg'
import GirlStickers from '../Images/Illustration/GirlStickers.jpg'
import RabbitStickers from '../Images/Illustration/RabbitStickers.jpg'
import MiniBuddha from '../Images/Illustration/MiniBuddha.png'
import YeYe from '../Images/Illustration/IntheKitchenwithYeYe_crop.jpg'
import WordsHavePower from '../Images/Illustration/WhenWordsHavePower/WordsHavePower_p28-29.jpg'
import LeviNapkin from '../Images/Illustration/Levi_napkin_blush.jpg'
import SincerelyDiary from '../Images/Illustration/SincerelyDiaryBookJacket.jpg'
import BookReviewEditorial from '../Images/Illustration/BookReviewEditorial.jpg'



export default function Illustration(){
	const [open, setOpen] = useState(false);

	return(
		<div>
			<div className="illustration-grid-container">
				<div id="BookReviewEditorial" className="illustrationProject">
		            <img className="gridImage" src={BookReviewEditorial} loading="lazy"/>
		        </div>
		        <div className="illustrationOverlay" id="BookReviewEditorialOverlay">
		            <h3>Personal Work</h3>
		            <Link to="/Illustration/BookReviewEditorial">Book Review Editorial</Link>
		        </div>

				<div id="SincerelyDiary" className="illustrationProject">
		            <img className="gridImage" src={SincerelyDiary} loading="lazy"/>
		        </div>
		        <div className="illustrationOverlay" id="SincerelyDiaryOverlay">
		            <h3>Commission</h3>
		            <Link to="/Illustration/SincerelyDiary">Sincerely Diary</Link>
		        </div>

				<div id="YeYe" className="illustrationProject">
		            <img className="gridImage" src={YeYe} loading="lazy"/>
		        </div>
		        <div className="illustrationOverlay" id="YeYeOverlay">
		            <h3>Personal Work</h3>
		            <Link to="/Illustration/YeYeKitchen">In the Kitchen with YeYe</Link>
		        </div>

				<div id="WordsHavePower" className="illustrationProject">
		            <img className="gridImage" src={WordsHavePower} loading="lazy"/>
		        </div>
		        <div className="illustrationOverlay" id="WordsHavePowerOverlay">
		            <h3>children's book</h3>
		            <Link to="/Illustration/WhenWordsHavePower">When Words Have Power</Link>
		        </div>
				
				<div id="secretSanta" className="illustrationProject">
		            <img className="gridImage" src={SecretSantaSociety} loading="lazy"/>
		        </div>
		        <div className="illustrationOverlay" id="secretSantaOverlay">
		            <h3>children's book</h3>
		            <Link to="/Illustration/SecretSantaSociety">Secret Santa Society</Link>
		        </div>

		        <div id="rapBattle" className="illustrationProject">
	            	<img className="gridImage" src={RapBattle} loading="lazy"/>
		        </div>
		        <div className="illustrationOverlay" id="rapBattleOverlay">
	                <h3>Commission</h3>
	            	<Link to="/Illustration/RapBattle">Autumn Moon Rap Battle</Link>   
		        </div>

		        <div id="emperor" className="imageOverlay">
		            <img className="gridImage" src={Emperor} loading="lazy"/>
		        </div>
		        <div className="illustrationOverlay" id="emperorOverlay">
		            <h3>Children's Book</h3>
		            <Link to="/Illustration/Emperor">Emperor's Seed and other stories</Link>
		        </div>

		        <div id="redriding" className="imageOverlay">
		            <img className="gridImage" src={LittleRed} loading="lazy"/>
		        </div>
		        <div className="illustrationOverlay" id="redridingOverlay">
		            <h3>children's book</h3>
		            <Link to="/Illustration/LittleRedRidingHood">Little Red Riding Hood</Link>
		        </div>

	 	        <div id="buddha" className="imageOverlay">
		            <img className="gridImage" src={MomBuddha} loading="lazy"/>
		        </div>
		        <div className="illustrationOverlay" id="buddhaOverlay">
		            <h3>Personal Project</h3>
		            <Link to="/Illustration/Buddha">Portrait</Link>
		        </div>

		        <div id="ideo" className="imageOverlay">
		            <img className="gridImage" src={IDEO} loading="lazy"/>
		        </div>
		        <div className="illustrationOverlay" id="ideoOverlay">
		            <h3>Work for Hire</h3>
		            <Link to="/Illustration/IDEO">EC Book Challenge</Link>
		        </div>

		        <div id="veggie" className="imageOverlay">
		            <img className="gridImage" src={VeggieAnimal} loading="lazy"/>
		        </div>
		        <div className="illustrationOverlay" id="veggieOverlay">
		            <h3>Personal Project</h3>
		            <Link to="/Illustration/VeggieAnimals">Veggie Animals</Link>
		        </div>

		        <div id="bear" className="imageOverlay">
		            <img className="gridImage" src={BearBasketball} loading="lazy"/>
		        </div>
		        <div className="illustrationOverlay" id="bearOverlay">
		            <h3>Personal Project</h3>
		            <Link to="/Illustration/BasketballAnimals">Basketball Animal Series</Link>
		        </div>

		        <div id="christmas" className="imageOverlay">
		            <img className="gridImage" src={ChristmasCard} loading="lazy"/>
		        </div>
		        <div className="illustrationOverlay" id="christmasOverlay">
		            <h3>Personal Project</h3>
		            <Link to="/Illustration/ChristmasCard">Christmas Card</Link>
		        </div>

		        <div id="panda" className="imageOverlay">
		            <img className="gridImage" src={StarvingPanda} loading="lazy"/>
		        </div>
		        <div className="illustrationOverlay" id="pandaOverlay">
		            <h3>Commission</h3>
		            <Link to="/Illustration/StarvingPanda">Starving Panda</Link>
		        </div>





		        <div id="potatochips" className="imageOverlay">
		            <img className="gridImage" src={PotatoChips} loading="lazy"/>
		        </div>
		        <div className="illustrationOverlay" id="potatochipsOverlay">
		            <h3>Personal Work</h3>
		            <Link to="/Illustration/PotatoChips">Potato Chips GIF</Link>
		        </div>

				<div id="covid" className="imageOverlay">
		            <img className="gridImage" src={Covid} loading="lazy"/>
		        </div>
		        <div className="illustrationOverlay" id="covidOverlay">
		            <h3>Personal Work</h3>
		            <Link to="/Illustration/COVID">COVID Inspired Illustration</Link>
		        </div>

		        <div id="medschool" className="imageOverlay">
		            <img className="gridImage" src={MedSchool} loading="lazy"/>
		        </div>
		        <div className="illustrationOverlay" id="medschoolOverlay">
		            <h3>Commission</h3>
		            <Link to="/Illustration/SlamPoetry">Slam Poetry Cover</Link>
		        </div>

		        <div id="minniegary" className="imageOverlay">
		            <img className="gridImage" src={MinnieGary} loading="lazy"/>
		        </div>
		        <div className="illustrationOverlay" id="minniegaryOverlay">
		            <h3>Commission</h3>
		            <Link to="/Illustration/MinnieGary">Customized <br/> Couple Sticker</Link>
		        </div>

		        <div id="yogatiger" className="imageOverlay">
		            <img className="gridImage" src={YogaTiger} loading="lazy"/>
		        </div>
		        <div className="illustrationOverlay" id="yogatigerOverlay">
		            <h3>Personal Work</h3>
		            <Link to="/Illustration/TigerYoga">Tiger Yoga</Link>
		        </div>

		        <div id="girlsticker" className="imageOverlay">
		            <img className="gridImage" src={GirlStickers} loading="lazy"/>
		        </div>
		        <div className="illustrationOverlay" id="girlstickerOverlay">
		            <h3>Personal Work</h3>
		            <Link to="/Illustration/GirlCharacterSamples">Girl Character Samples</Link>
		        </div>

		        <div id="rabbitsticker" className="imageOverlay">
		            <img className="gridImage" src={RabbitStickers} loading="lazy"/>
		        </div>
		        <div className="illustrationOverlay" id="rabbitstickerOverlay">
		            <h3>Personal Work</h3>
		            <Link to="/Illustration/RabbitCharacterSamples">Rabbit Character Samples</Link>
		        </div>

		        <div id="minibuddha" className="imageOverlay">
		            <img className="gridImage" src={MiniBuddha} loading="lazy"/>
		        </div>
		        <div className="illustrationOverlay" id="minibuddhaOverlay">
		            <h3>Commission</h3>
		            <Link to="/Illustration/BuddhaStatues">Buddha Statues</Link>
		        </div>

		        <div id="levinapkin" className="imageOverlay">
		            <img className="gridImage" src={LeviNapkin} loading="lazy"/>
		        </div>
		        <div className="illustrationOverlay" id="levinapkinOverlay">
		            <h3>Commission</h3>
		            <Link to="/Illustration/WeddingNapkinDesign">Wedding Napkin Design</Link>
		        </div>


		    </div>
	    	<div className="illustration-mobile">
				<div className="mobileNav">
					<Burger open={open} setOpen={setOpen}/>
					<MobileNavBar open={open} setOpen={setOpen}/>
				</div>
	    		<Link to="/Illustration/YeYeKitchen"><img className="gridImage" src={YeYe} loading="lazy"/></Link>
	    		<Link to="/Illustration/WhenWordsHavePower"><img className="gridImage" src={WordsHavePower} loading="lazy"/></Link>
	    		<Link to="/Illustration/BookReviewEditorial"><img className="gridImage" src={BookReviewEditorial} loading="lazy"/></Link>
	    		<Link to="/Illustration/Emperor"><img className="gridImage" src={Emperor} loading="lazy"/></Link>
	    		<Link to="/Illustration/LittleRedRidingHood"><img className="gridImage" src={LittleRed} loading="lazy"/></Link>
	    		<Link to="/Illustration/SecretSantaSociety"><img className="gridImage" src={SecretSantaSociety} loading="lazy"/></Link>
	    		<Link to="/Illustration/SincerelyDiary"><img className="gridImage" src={SincerelyDiary} loading="lazy"/></Link>
	    		<Link to="/Illustration/StarvingPanda"><img className="gridImage" src={StarvingPanda} loading="lazy"/></Link>

	    		<Link to="/Illustration/IDEO"><img className="gridImage" src={IDEO} loading="lazy"/></Link>
	    		<Link to="/Illustration/PotatoChips"><img className="gridImage" src={PotatoChips} loading="lazy"/></Link>
	    		<Link to="/Illustration/COVID"><img className="gridImage" src={Covid} loading="lazy"/></Link>
	    		<Link to="/Illustration/ChristmasCard"><img className="gridImage" src={ChristmasCard} loading="lazy"/></Link>

	    		<Link to="/Illustration/Buddha"><img className="gridImage" src={MomBuddha} loading="lazy"/></Link>
	    		<Link to="/Illustration/GirlCharacterSamples"><img className="gridImage" src={GirlStickers} loading="lazy"/></Link>
	    		<Link to="/Illustration/BasketballAnimals"><img className="gridImage" src={BearBasketball} loading="lazy"/></Link>
	    		<Link to="/Illustration/RabbitCharacterSamples"><img className="gridImage" src={RabbitStickers} loading="lazy"/></Link>
	    		<Link to="/Illustration/MinnieGary"><img className="gridImage" src={MinnieGary} loading="lazy"/></Link>
	    		<Link to="/Illustration/SlamPoetry"><img className="gridImage" src={MedSchool} loading="lazy"/></Link>
	    		<Link to="/Illustration/BuddhaStatues"><img className="gridImage" src={MiniBuddha} loading="lazy"/></Link>
	    		<Link to="/Illustration/TigerYoga"><img className="gridImage" src={YogaTiger} loading="lazy"/></Link>
	    		<Link to="/Illustration/RapBattle"><img className="gridImage" src={RapBattle} loading="lazy"/></Link>   
	    		<Link to="/Illustration/VeggieAnimals"><img className="gridImage" src={VeggieAnimal} loading="lazy"/></Link>


	    	</div>
		</div>
		
	);
};