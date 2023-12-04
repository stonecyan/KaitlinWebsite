import React from 'react';
import '../Desktop.css'

import BookReviewEd from '../../Images/Illustration/BookReviewEditorial/BookReviewEditorial.jpg'
import colorStudy1 from '../../Images/Illustration/BookReviewEditorial/BookReviewColorStudy1.jpg'
import colorStudy2 from '../../Images/Illustration/BookReviewEditorial/BookReviewColorStudy2.jpg'
import sketch from '../../Images/Illustration/BookReviewEditorial/BookReviewSketch.jpg'
import thumbnail from '../../Images/Illustration/BookReviewEditorial/BookReviewThumbnails.jpg'

function BookReviewEditorial(){
    return(
    	<div class="page">
		    <div class="illustrationContentPage">
		        <h2>Book Review Editorial</h2>
				<p class="contentText">
				Book reviews are important to a book’s success. In this self driven project, I focused on turning this concept into a visually compelling, modern, and playful image.
		        </p>
		        <img class="contentImage" src={BookReviewEd} />
				<p class="contentText">Initial Thumbnails:</p>
				<img class="contentImage" src={thumbnail} />
				<img class="contentImage" src={sketch} />
				<p class="contentText">Color Studies:</p>
				<div class="contentHMH">
					<img class="contentImage" src={colorStudy1} />
					<img class="contentImage" src={colorStudy2} />
				</div>


		    </div>

		</div>
    )
}

export default BookReviewEditorial