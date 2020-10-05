import React, {Component} from "react";
import {slide as Menu} from 'react-burger-menu'

class MobileNav extends Component{
	render(){
		return(
			<Menu>
				<a>Mobile</a>
			</Menu>
		);
	}
};

export default MobileNav;