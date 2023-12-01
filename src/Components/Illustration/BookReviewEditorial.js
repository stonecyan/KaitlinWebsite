import React from 'react';
import '../Desktop.css'

import BookReviewEd from '../../Images/Illustration/BookReviewEditorial.jpg'

function BookReviewEditorial(){
    return(
    	<div class="page">
		    <div class="illustrationContentPage">
		        <h2>Book Review Editorial</h2>
		        <img class="contentImage" src={BookReviewEd} />
		    </div>
		</div>
    )
}

export default BookReviewEditorial