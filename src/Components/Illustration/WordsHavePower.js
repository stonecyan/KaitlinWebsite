import React from 'react';
import '../Desktop.css'

import one from '../../Images/Illustration/WhenWordsHavePower/Cover.jpg'
import two from '../../Images/Illustration/WhenWordsHavePower/FinalCase_KY.jpg'
import three from '../../Images/Illustration/WhenWordsHavePower/WordsHavePower_p1.jpg'
import four from '../../Images/Illustration/WhenWordsHavePower/WordsHavePower_p4-5.jpg'
import five from '../../Images/Illustration/WhenWordsHavePower/WordsHavePower_p12-13.jpg'
import six from '../../Images/Illustration/WhenWordsHavePower/WordsHavePower_p14-15.jpg'
import seven from '../../Images/Illustration/WhenWordsHavePower/WordsHavePower_p16-17.jpg'
import eight from '../../Images/Illustration/WhenWordsHavePower/WordsHavePower_p22-23.jpg'
import nine from '../../Images/Illustration/WhenWordsHavePower/WordsHavePower_p24-25.jpg'
import ten from '../../Images/Illustration/WhenWordsHavePower/WordsHavePower_p28-29.jpg'
import eleven from '../../Images/Illustration/WhenWordsHavePower/WordsHavePower_p32.jpg'

function WordsHavePower(){
    return(
    	<div class="page">
		    <div class="illustrationContentPage">
		        <h2>When Words Have Power</h2>
		        <p class="contentText">
		        Worked as the illustrator for Lisa Chong's picture book, "When Words Have Power", released in October 2022. Available to purchase through <a href="https://www.amazon.com/When-Words-Have-Power-Chong/dp/151313485X">Amazon</a> and <a href="https://www.barnesandnoble.com/w/when-words-have-power-lisa-chong/1140867002?ean=9781513134857">Barnes & Noble</a>.
		        </p>
		        <img class="contentImage" src={one} />
		        <p class="contentText">Book Jacket:</p>
		        <img class="contentImage" src={two} />
		        <p class="contentText">Highlighted Spreads:</p>
		        <img class="contentImage" src={three} />
		        <img class="contentImage" src={four} />
		        <img class="contentImage" src={five} />
		        <img class="contentImage" src={six} />
		        <img class="contentImage" src={seven} />
		        <img class="contentImage" src={eight} />
		        <img class="contentImage" src={nine} />
		        <img class="contentImage" src={ten} />
		        <img class="contentImage" src={eleven} />

		    </div>
		</div>
    )
}

export default WordsHavePower