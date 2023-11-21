import React, {useState} from "react";
import Burger from '../Hamburger.js'
import MobileNavBar from '../MobileNavBar.js'
import '../Desktop.css'

import Cover from '../../Images/Design/PenguinBooks/SincerelyDiary/SincerelyDiary.jpg'
import Jacket from '../../Images/Design/PenguinBooks/SincerelyDiary/SincerelyDiaryBookJacket.jpg'
import Sketches from '../../Images/Design/PenguinBooks/SincerelyDiary/SincerelyDiaryCoverSketches.jpg'

import Interior1 from '../../Images/Design/PenguinBooks/SincerelyDiary/1.jpg'
import Interior2 from '../../Images/Design/PenguinBooks/SincerelyDiary/2.jpg'
import Interior4 from '../../Images/Design/PenguinBooks/SincerelyDiary/4.jpg'
import Interior8 from '../../Images/Design/PenguinBooks/SincerelyDiary/8.jpg'
import Interior10 from '../../Images/Design/PenguinBooks/SincerelyDiary/10.jpg'
import Interior18 from '../../Images/Design/PenguinBooks/SincerelyDiary/18.jpg'
import Map1 from '../../Images/Design/PenguinBooks/SincerelyDiary/Map1.jpg'
import Map2 from '../../Images/Design/PenguinBooks/SincerelyDiary/Map2.jpg'
import Map3 from '../../Images/Design/PenguinBooks/SincerelyDiary/Map3.jpg'
import Map4 from '../../Images/Design/PenguinBooks/SincerelyDiary/Map4.jpg'
import Map5 from '../../Images/Design/PenguinBooks/SincerelyDiary/Map5.jpg'
import Map6 from '../../Images/Design/PenguinBooks/SincerelyDiary/Map6.jpg'
import InteriorDesign1 from '../../Images/Design/PenguinBooks/SincerelyDiary/SincerelyDiaryInterior1.jpg'
import InteriorDesign2 from '../../Images/Design/PenguinBooks/SincerelyDiary/SincerelyDiaryInterior2.jpg'
import InteriorDesign3 from '../../Images/Design/PenguinBooks/SincerelyDiary/SincerelyDiaryInterior3.jpg'
import InteriorDesign4 from '../../Images/Design/PenguinBooks/SincerelyDiary/SincerelyDiaryInterior4.jpg'



function SincerelyDiary(){
	const [open, setOpen] = useState(false);

	return(
		<div class="page">
		    <div class="designContentPageBook">
		    	<div className="mobileNav">
					<Burger open={open} setOpen={setOpen}/>
					<MobileNavBar open={open} setOpen={setOpen}/>
				</div>
		        <div class="contentHMH">
		            <img class="contentImage" src={Cover} />
		            <p class="contentTextHMHTitle">Sincerely Diary</p>
		            <p class="contentTextHMH">Self Published Book by Maryna Doughty</p>
		            <p class="contentTextHMH ItalicText">Cover illustration, cover design, title lettering, 30 interior spot illustrations, interior design</p>
		        </div>

		        <br />
		        <img class="contentImage" src={Jacket} />

		        <br />
		        <p class="contentText">Cover Sketches:</p>

		        <img class="contentImage" src={Sketches} />

		        <br />
		        <p class="contentText">Selected Interior Illustrations:</p>
		        <div class="interiorIllustrationGrid">
			        <img class="contentImage" src={Map1} />
			        <img class="contentImage" src={Map5} />
			        <img class="contentImage" src={Map6} />
			        <img class="contentImage" src={Map2} />			
        			<img class="contentImage" src={Map4} />        
			        <img class="contentImage" src={Map3} />
			        <img class="contentImage" src={Interior1} />
			        <img class="contentImage" src={Interior2} />
			        <img class="contentImage" src={Interior4} />
			        <img class="contentImage" src={Interior8} />
			        <img class="contentImage" src={Interior10} />
			        <img class="contentImage" src={Interior18} />

			    </div>
			    <p class="contentText">Selected Interior Design:</p>
			    <div class="interiorDesignGrid">
			        <img class="contentImage" src={InteriorDesign1} />
			        <img class="contentImage" src={InteriorDesign2} />
			        <img class="contentImage" src={InteriorDesign3} />
			        <img class="contentImage" src={InteriorDesign4} />
			    </div>
		    </div>

		</div>
	)
}

export default SincerelyDiary