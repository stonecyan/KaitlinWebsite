import React, {useState} from "react";
import '../Desktop.css'
import Burger from '../Hamburger.js'
import MobileNavBar from '../MobileNavBar.js'


import Shard from '../../Images/Design/HMHBooks/ASingleShard.jpg'
import Jacket from '../../Images/Design/HMHBooks/ASingleShardJacket.jpg'

function ASingleShard(){
	const [open, setOpen] = useState(false);

	return(
		<div class="page">
			<div className="mobileNav">
				<Burger open={open} setOpen={setOpen}/>
				<MobileNavBar open={open} setOpen={setOpen}/>
			</div>
		    <div class="designContentPageBook">
		        <div class="contentHMH">
		            <img class="contentImage" src={Shard} />
		            <p class="contentTextHMHTitle">A Single Shard</p>
		            <p class="contentTextHMH">Clarion Books</p>
		            <p class="contentTextHMH ItalicText" > Art direction, repackage, design</p>
		            <br />
		            <p class="contentTextHMH2 ItalicText" > Illustration by Dion MBD</p>
		        </div>
		        <br />
		        <img class="contentImage" src={Jacket} />
		    </div>
		</div>
	)
}

export default ASingleShard