import React from 'react';
import NavBar from "./Components/NavBar.js"
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Illustration from './Components/Illustration.js'
import Design from './Components/Design.js'
import About from './Components/About.js'
import YoungAdult from './Components/YoungAdult.js'
import MiddleGrade from './Components/MiddleGrade.js'
import PictureBooks from './Components/PictureBooks.js'
import UIUX from './Components/UIUX.js'

import EvenOdd from './Components/Design/EvenOdd.js'
import SherlockBonesSeaCreature from './Components/Design/SherlockBonesSeaCreature.js'
import MrWalker from './Components/Design/MrWalker.js'
import OneSmartSheep from './Components/Design/OneSmartSheep.js'
import LakeWild from './Components/Design/RescueLakeWild.js'
import ASingleShard from './Components/Design/ASingleShard.js'
import WinterborneHome1 from './Components/Design/WinterborneHome1.js'
import WinterborneHome2 from './Components/Design/WinterborneHome2.js'
import ClosedForSeason from './Components/Design/ClosedForSeason.js'
import DollGarden from './Components/Design/DollGarden.js'
import Feather from './Components/Design/Feather.js'
import GhostCrutchfield from './Components/Design/GhostCrutchfield.js'
import LightsWonderRock from './Components/Design/LightsWonderRock.js'
import MrComplain from './Components/Design/MrComplain.js'
import SherlockBones from './Components/Design/SherlockBones.js'
import TimeForAndrew from './Components/Design/TimeForAndrew.js'
import WaywardCreatures from './Components/Design/WaywardCreatures.js'
import PrincessUnlimited from './Components/Design/PrincessUnlimited.js'
import Graceling from './Components/Design/Graceling.js'
import WTBFB from './Components/Design/WTBFB.js'
import HNTFIL from './Components/Design/HNTFIL.js'
import MicahSummers from './Components/Design/MicahSummers.js' 
import BeautyandtheBesharam from './Components/Design/BeautyandtheBesharam.js' 
import MostDazzlingGirlinBerlin from './Components/Design/MostDazzlingGirlinBerlin.js' 
import RethinktheInternet from './Components/Design/RethinktheInternet.js' 
import TheSeaKnowsmyName from './Components/Design/TheSeaKnowsmyName.js' 
import TheVanishingDeep from './Components/Design/TheVanishingDeep.js' 
import ZylaandKai from './Components/Design/ZylaandKai.js'
import VeryBigFall from './Components/Design/VeryBigFall.js'
import WalkonBy from './Components/Design/WalkonBy.js'
import BillionDollarGirl from './Components/Design/BillionDollarGirl.js'
import LosMonstruos from './Components/Design/LosMonstruos.js'
import HiddenDragon from './Components/Design/HiddenDragon.js'
import IslandsofElsewhere from './Components/Design/IslandsofElsewhere'
import YearMyLifeWentDowntheToilet from './Components/Design/YearMyLifeWentDowntheToilet.js'
import WishUponLantern from './Components/Design/WishUponLantern.js'
import AGalaxyofWhales from './Components/Design/AGalaxyofWhales.js'
import AverilOffline from './Components/Design/AverilOffline.js'
import CursedBoysandBrokenHearts from './Components/Design/CursedBoysandBrokenHearts.js'
import FromLittleTokyoWithLove from './Components/Design/FromLittleTokyoWithLove.js'
import LightEnoughtoFloat from './Components/Design/LightEnoughtoFloat.js'
import RoosterandtheDancingDiablo from './Components/Design/RoosterandtheDancingDiablo.js'
import RulesforRuleBreaking from './Components/Design/RulesforRuleBreaking.js'
import SuddenlyaMurder from './Components/Design/SuddenlyaMurder.js'
import TheBreakupLists from './Components/Design/TheBreakupLists.js'
import TheCurseofEelgrassBog from './Components/Design/TheCurseofEelgrassBog.js'
import WarriorGirl from './Components/Design/WarriorGirl.js'
import YourLonelyNightsareOver from './Components/Design/YourLonelyNightsareOver.js'
import SincerelyDiary from './Components/Design/SincerelyDiary.js'



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
import COVID from './Components/Illustration/Covid.js'
import GirlStickers from './Components/Illustration/GirlStickers.js'
import MedSchool from './Components/Illustration/MedSchool.js'
import MinnieGary from './Components/Illustration/MinnieGary.js'
import PotatoChips from './Components/Illustration/PotatoChips.js'
import TigerYoga from './Components/Illustration/TigerYoga.js'
import BuddhaStatues from './Components/Illustration/MiniBuddha.js'
import RabbitStickers from './Components/Illustration/RabbitStickers.js'
import YeYeKitchen from './Components/Illustration/Grandpa.js'
import WordsHavePower from './Components/Illustration/WordsHavePower.js'
import LeviNapkin from './Components/Illustration/LeviNapkin.js'
import BookReviewEditorial from './Components/Illustration/BookReviewEditorial.js'

import Bobabar from './Components/UIUX/Bobabar.js'
import StrengthMagazine from './Components/UIUX/StrengthMagazine.js'
import TapNY from './Components/UIUX/TapNY.js'
import WelcomeWeek from './Components/UIUX/WelcomeWeek.js'
import FASNYLogo from './Components/UIUX/FASNYLogo.js'


function App() {
  	return (
	    <Router>
	    	<NavBar />    
		    <Switch>
		    	<Route exact path="/" component={Illustration} />
			    <Route exact path="/Illustration" component={Illustration} />
				<Route exact path="/BookDesign" component={Design} />
				<Route exact path="/YoungAdult" component={YoungAdult} />
				<Route path="/MiddleGrade" component={MiddleGrade} />
				<Route path="/PictureBooks" component={PictureBooks} />
				<Route path="/About" component={About} />
				<Route exact path="/Design" component={UIUX} />

				<Route path="/Design/Bobabar" component={Bobabar} />
				<Route path="/Design/StrengthMagazine" component={StrengthMagazine} />
				<Route path="/Design/TAPNY" component={TapNY} />
				<Route path="/Design/StyleGuides" component={WelcomeWeek} />
				<Route path="/Design/FASNYLogo" component={FASNYLogo} />


				<Route path="/BookDesign/EvenOdd" component={EvenOdd} />
				<Route path="/BookDesign/SherlockBonesSeaCreature" component={SherlockBonesSeaCreature} />
				<Route path="/BookDesign/MrWalker" component={MrWalker} />
				<Route path="/BookDesign/OneSmartSheep" component={OneSmartSheep} />
				<Route path="/BookDesign/LakeWild" component={LakeWild} />
				<Route path="/BookDesign/ASingleShard" component={ASingleShard} />
				<Route path="/BookDesign/WinterborneHomeVV" component={WinterborneHome1} />
				<Route path="/BookDesign/WinterborneHomeMM" component={WinterborneHome2} />
				<Route path="/BookDesign/ClosedForSeason" component={ClosedForSeason} />
				<Route path="/BookDesign/DollGarden" component={DollGarden} />
				<Route path="/BookDesign/OfAFeather" component={Feather} />
				<Route path="/BookDesign/GhostCrutchfield" component={GhostCrutchfield} />
				<Route path="/BookDesign/LightsWonderRock" component={LightsWonderRock} />
				<Route path="/BookDesign/MrComplain" component={MrComplain} />
				<Route path="/BookDesign/SherlockBones" component={SherlockBones} />
				<Route path="/BookDesign/TimeForAndrew" component={TimeForAndrew} />
				<Route path="/BookDesign/WaywardCreatures" component={WaywardCreatures} />
				<Route path="/BookDesign/PrincessUnlimited" component={PrincessUnlimited} />
				<Route path="/BookDesign/Graceling" component={Graceling} />
				<Route path="/BookDesign/WhereTheBlackFlowersBloom" component={WTBFB} />
				<Route path="/BookDesign/HowNotToFallinLove" component={HNTFIL} />
				<Route path="/BookDesign/99BoyfriendsofMicahSummers" component={MicahSummers} />
				<Route path="/BookDesign/BeautyandtheBesharam" component={BeautyandtheBesharam} />
				<Route path="/BookDesign/MostDazzlingGirlinBerlin" component={MostDazzlingGirlinBerlin} />
				<Route path="/BookDesign/RethinktheInternet" component={RethinktheInternet} />
				<Route path="/BookDesign/TheSeaKnowsmyName" component={TheSeaKnowsmyName} />
				<Route path="/BookDesign/TheVanishingDeep" component={TheVanishingDeep} />
				<Route path="/BookDesign/ZylaandKai" component={ZylaandKai} />
				<Route path="/BookDesign/MostDazzlingGirlinBerlin" component={MostDazzlingGirlinBerlin} />
				<Route path="/BookDesign/VeryBigFall" component={VeryBigFall} />
				<Route path="/BookDesign/AsYouWalkonBy" component={WalkonBy} />
				<Route path="/BookDesign/BillionDollarGirl" component={BillionDollarGirl} />
				<Route path="/BookDesign/LosMonstruos" component={LosMonstruos} />
				<Route path="/BookDesign/HiddenDragon" component={HiddenDragon} />
				<Route path="/BookDesign/IslandsofElsewhere" component={IslandsofElsewhere} />
				<Route path="/BookDesign/YearMyLifeWentDowntheToilet" component={YearMyLifeWentDowntheToilet} />
				<Route path="/BookDesign/WishUponLantern" component={WishUponLantern} />
				<Route path="/BookDesign/AGalaxyofWhales" component={AGalaxyofWhales} />
				<Route path="/BookDesign/AverilOffline" component={AverilOffline} />
				<Route path="/BookDesign/CursedBoysandBrokenHearts" component={CursedBoysandBrokenHearts} />
				<Route path="/BookDesign/FromLittleTokyoWithLove" component={FromLittleTokyoWithLove} />
				<Route path="/BookDesign/LightEnoughtoFloat" component={LightEnoughtoFloat} />
				<Route path="/BookDesign/RoosterandtheDancingDiablo" component={RoosterandtheDancingDiablo} />
				<Route path="/BookDesign/RulesforRuleBreaking" component={RulesforRuleBreaking} />
				<Route path="/BookDesign/SuddenlyaMurder" component={SuddenlyaMurder} />
				<Route path="/BookDesign/TheBreakupLists" component={TheBreakupLists} />
				<Route path="/BookDesign/TheCurseofEelgrassBog" component={TheCurseofEelgrassBog} />
				<Route path="/BookDesign/WarriorGirl" component={WarriorGirl} />
				<Route path="/BookDesign/YourLonelyNightsareOver" component={YourLonelyNightsareOver} />
				<Route path="/BookDesign/SincerelyDiary" component={SincerelyDiary} />




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
				<Route path="/Illustration/COVID" component={COVID} />
				<Route path="/Illustration/GirlCharacterSamples" component={GirlStickers} />
				<Route path="/Illustration/SlamPoetry" component={MedSchool} />
				<Route path="/Illustration/MinnieGary" component={MinnieGary} />
				<Route path="/Illustration/PotatoChips" component={PotatoChips} />
				<Route path="/Illustration/TigerYoga" component={TigerYoga} />
				<Route path="/Illustration/BuddhaStatues" component={BuddhaStatues} />
				<Route path="/Illustration/RabbitCharacterSamples" component={RabbitStickers} />
				<Route path="/Illustration/YeYeKitchen" component={YeYeKitchen} />
				<Route path="/Illustration/WhenWordsHavePower" component={WordsHavePower} />
				<Route path="/Illustration/WeddingNapkinDesign" component={LeviNapkin} />
				<Route path="/Illustration/SincerelyDiary" component={SincerelyDiary} />
				<Route path="/Illustration/BookReviewEditorial" component={BookReviewEditorial} />




		    </Switch>
	    </Router>
  );
}

export default App;
