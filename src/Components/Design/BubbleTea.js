import React from 'react';
import '../ContentPages.css'

import Logo from '../../Images/Design/Boba/Current Logo.jpg'
import one from '../../Images/Design/Boba/static1.squarespace.jpg'
import two from '../..//Images/Design/Boba/static1.squarespace-1.jpg'
import three from '../../Images/Design/Boba/static1.squarespace-2.jpg'
import four from '../../Images/Design/Boba/static1.squarespace-3.jpg'
import five from '../../Images/Design/Boba/static1.squarespace-4.jpg'
import six from '../../Images/Design/Boba/static1.squarespace-5.jpg'
import seven from '../../Images/Design/Boba/static1.squarespace-6.jpg'

function BubbleTea(){
    return(
        <div class="page">
            <div class="contentPage">
                <h2>St. Louis Bubble Tea Rebrand</h2>'
                <p class="contentText">A rebranding opportunity for St. Louis Bubble Tea located on the famous Delmar Loop, St. Louis. In this Branding and Identity course, I practiced the seven-phase process for creating and implementing effective brand identity. From estimating and scheduling, research, design development through design application, I learned the essence of successfully developing a brand.</p>
                <p class="contentText">My rebranding focused on the four fundamental qualities of the store: authenticity, customization, innovation, and hospitality. The logo design highlights the essence of the store--- Customization. The tagline “TEAse your taste buds” reinforces the innovative drink selections while maintaining the liveliness and friendliness of the store. The mockups consistently portray these core values in the store’s branding.</p>
                <p class="contentText">Current logo:</p>
                <img class="contentImage" src={Logo} />
                <p class="contentText">Final proposal:</p>
                <img class="contentImage" src={one} />
                <img class="contentImage" src={two} />
                <img class="contentImage" src={three} />
                <img class="contentImage" src={four} />
                <img class="contentImage" src={five} />
                <img class="contentImage" src={six} />
                <img class="contentImage" src={seven} />

            </div>
        </div>
    )
}

export default BubbleTea