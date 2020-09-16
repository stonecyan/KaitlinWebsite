import React from 'react';
import './About.css'
import {Link} from 'react-router-dom'

import Kaitlin from '../Images/Kaitlin Yang Illustrator.jpg'
import Resume from '../Kaitlin Yang Resume.pdf'

function About(){
	return(
		<div className="aboutDescription">
		    <h1 className="aboutTitle">About Me</h1>
		    <div className="aboutColumn">
		        <img id="aboutImage" src={Kaitlin} />
		        <Link to={Resume} target="_blank" download>download my resume here</ Link>
		    </div>
		    <div className="aboutColumn" id="aboutDescription">
		        <p> Hi! My name is Kaitlin. I am a children's book designer by day and illustrator by night.</p>
		        <p> I was born and raised in Taiwan, then lived in Chicago, the Bay Area, and Seattle before moving to 
		            St. Louis for college. My unique international background prompts me to explore different cultures 
		            and inspires me to be an open-minded and creative artist. I hope to become a children's book illustrator 
		            one day, and I wish to facilitate the exchange of cultures, emotions, and beliefs through my illustrations, 
		            one book at a time. </p>
		        <p> I graduated from Washington University in St. Louis in 2018 with a BFA in Communication Design. I currently 
		            work as an associate designer at HMH Books for Young Readers in New York City.</p>
		        <p>
		            If you have a project in mind, I'd like to hear about it :)
		            <br />Get in touch! <a href="mailto:kaitlin.k.yang@gmail.com">kaitlin.k.yang@gmail.com</a>
		        </p>
		    </div>
		</div>
	)
}

export default About