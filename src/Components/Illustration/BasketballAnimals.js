import React from 'react';
import '../ContentPages.css'

import one from '../../Images/Illustration/Basketball Animal Series/inktober1.jpg'
import two from '../../Images/Illustration/Basketball Animal Series/intktober1closeup.jpg'
import three from '../../Images/Illustration/Basketball Animal Series/inktober1 closeup2.jpg'
import four from '../../Images/Illustration/Basketball Animal Series/inktober1 closeup3.jpg'
import bear from '../../Images/Illustration/Basketball Animal Series/bear3.jpg'
import hippo from '../../Images/Illustration/Basketball Animal Series/hippo final.jpg'
import lion from '../../Images/Illustration/Basketball Animal Series/lion.jpg'
import bird from '../../Images/Illustration/Basketball Animal Series/bird2.jpg'
import giraffe from '../../Images/Illustration/Basketball Animal Series/giraffe bball.jpg'

function BasketballAnimals(){
    return(
    	<div class="page">
		    <div class="illustrationContentPage">	
		        <h2>Basketball + Animal Series</h2>
		        <img class="contentImage" src={one} />
		        <div class="row">
		            <div class="bballcolumn">
		                <img class="contentImage" src={two} />
		            </div>
		            <div class="bballcolumn">
		                <img class="contentImage" src={three} />
		            </div>
		            <div class="bballcolumn">
		                <img class="contentImage" src={four} />
		            </div>
		        </div>
		        <img class="contentImage" src={bear} />
		        <img class="contentImage" src={hippo} />
		        <img class="contentImage" src={lion} />
		        <div class="row">
		            <div class="column">
		                <img class="contentImage" src={bird} />
		            </div>
		            <div class="column">
		                <img class="contentImage" src={giraffe} />
		            </div>
		        </div>
		    </div>
		</div>
    )
}

export default BasketballAnimals