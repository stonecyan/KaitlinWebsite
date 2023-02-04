import React, {useState} from 'react';
import './About.css'
import {Link} from 'react-router-dom'
import Burger from './Hamburger.js'
import MobileNavBar from './MobileNavBar.js'

import Kaitlin from '../Images/Kaitlin Yang Illustrator.jpg'
import Resume from '../Kaitlin Yang Resume.pdf'

export default function About(){
	const [open, setOpen] = useState(false);

	return(
		<div>
			<div className="mobileNav">
				<Burger open={open} setOpen={setOpen}/>
				<MobileNavBar open={open} setOpen={setOpen}/>
			</div>
			<div className="aboutDescription">
				<h1 className="aboutTitle">About Me</h1>
				<div className="aboutColumn">
					<img id="aboutImage" src={Kaitlin} />
					<Link to={Resume} id="resumeDownload" target="_blank" download>download my resume here</ Link>
				</div>
				<div className="aboutColumn" id="aboutDescription">
					<p> Hi! My name is Kaitlin. I am a children's book designer by day and illustrator by night.</p>
					<p> I was born and raised in Taiwan, then lived in Chicago, the Bay Area, and Seattle before moving to 
						St. Louis for college. My unique international background prompts me to explore different cultures 
						and inspires me to be an open-minded and creative artist. I hope to become a children's book illustrator 
						one day, and I wish to facilitate the exchange of cultures, emotions, and beliefs through my illustrations, 
						one book at a time. </p>
					<p> I graduated from Washington University in St. Louis in 2018 with a BFA in Communication Design. I currently 
						work as a children's book designer at Penguin Random House in New York City.</p>
					<p>
						If you have a project in mind, I'd like to hear about it :)
						<br />Get in touch! <a href="mailto:kaitlin.k.yang@gmail.com">kaitlin.k.yang@gmail.com</a>
					</p>
				</div>
			</div>
		</div>
		
	)
}
