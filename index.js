const portifolioItems= document.querySelectorAll('.portfolio-item-wrapper')
	//For Darkening the images on mover over.
	portifolioItems.forEach(portfolioItem =>{
		portfolioItem.addEventListener('mouseover',()=>{
			console.log(portfolioItem.childNodes[1].classList);
			portfolioItem.childNodes[1].classList.add('img-darken');
		});
	});

	//Removing the Darkened effect.
	portifolioItems.forEach(portfolioItem =>{
		portfolioItem.addEventListener('mouseout',()=>{
			console.log(portfolioItem.childNodes[1].classList);
			portfolioItem.childNodes[1].classList.remove('img-darken');
		});
	});