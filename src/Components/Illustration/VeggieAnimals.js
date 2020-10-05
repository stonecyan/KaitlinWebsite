import React from 'react';
import '../Desktop.css'

import one from '../../Images/Illustration/Veggie Animals/veggie animal 1.jpg'
import two from '../../Images/Illustration/Veggie Animals/veggie animal 2.jpg'
import three from '../../Images/Illustration/Veggie Animals/veggie animal 3.jpg'
import four from '../../Images/Illustration/Veggie Animals/veggie animal 4.jpg'

function VeggieAnimals(){
    return(
    	<div class="page">
		    <div class="illustrationContentPage">
		        <h2>Veggie Animals</h2>
		        <p class="contentText"></p>
		        <img class="contentImage" src={one} />
		        <img class="contentImage" src={two} />
		        <img class="contentImage" src={three} />
		        <img class="contentImage" src={four} />
		    </div>
		</div>
    )
}

export default VeggieAnimals