import React from 'react';
import '../Desktop.css'

import Final from '../../Images/UIUX/FoodIcons/FoodIconsFinal.jpg'
import CheckThumb from '../../Images/UIUX/FoodIcons/CheckIconThumbnails.jpg'
import MenuThumb from '../../Images/UIUX/FoodIcons/MenuIconThumbnails.jpg'
import ReservationThumb from '../../Images/UIUX/FoodIcons/ReservationIconThumbnails.jpg'
import Ideas from '../../Images/UIUX/FoodIcons/FoodIconsIdeas.jpg'
import FoodMenuProcess from '../../Images/UIUX/FoodIcons/FoodMenuIconProcess.jpg'
import ReservationCheckProcess from '../../Images/UIUX/FoodIcons/ReservationCheckIconProcess.jpg'
import SizeCheck from '../../Images/UIUX/FoodIcons/FoodIconsSizeCheck.jpg'






function FoodIcons(){
    return(
    	<div class="page">
		    <div class="illustrationContentPage">
		        <h2>Food Icons</h2>
		        <p class="contentText">
		        	Phone app icon exploration and design for food and restaurant services. I imagine users using these icons as buttons to access saved restaurants, menus, reservations, and more.
		        </p>
		        <img class="contentImage" src={Final} />
		        <div class='contentHMH'>
			        <img class="contentImage" src={Ideas} />
			        <img class="contentImage" src={MenuThumb} />
			        <img class="contentImage" src={ReservationThumb} />
			        <img class="contentImage" src={CheckThumb} />
		        </div>


		        <img class="contentImage" src={FoodMenuProcess} />
		        <img class="contentImage" src={ReservationCheckProcess} />

		        <img class="contentImage" src={Final} />
		        <img class="contentImage" src={SizeCheck} />



		    </div>

		</div>
    )
}

export default FoodIcons