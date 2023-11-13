import React from 'react';
import '../Desktop.css'

import Cover from '../../Images/UIUX/Bobabar/BobabarCover.jpg'
import AppVideo from '../../Images/UIUX/Bobabar/BobabarInteractiveApp.mov'
import Wireframe from '../../Images/UIUX/Bobabar/BobabarWireframes.png'
import UIframe from '../../Images/UIUX/Bobabar/BobabarUIFrames.jpg'
import Process1 from '../../Images/UIUX/Bobabar/BobabarProcess1.jpg'
import Process2 from '../../Images/UIUX/Bobabar/BobabarProcess2.jpg'
import Process3 from '../../Images/UIUX/Bobabar/BobabarProcess3.jpg'


function Bobabar(){
	return(
		<div class="page">
		    <div class="designContentPageBook">
	            <img class="contentImage" src={Cover} />
	            <video class="contentVideo"controls playsinline autoplay muted loop><source src={AppVideo} type="video/mp4"></source></video>
	            <img class="contentImage" src={Wireframe} />
	            <img class="contentImage" src={UIframe} />

		            <img class="contentImage" src={Process1} />
		            <img class="contentImage" src={Process2} />
		            <img class="contentImage" src={Process3} />		

		    </div>
		</div>
	)
}

export default Bobabar
