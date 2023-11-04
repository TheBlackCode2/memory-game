
const cards = document.querySelectorAll('.card')
const defaultCardsBg = '#D9E928'
const correctCardsBg = '#8BC94A'
const wrongCardsBg   =  '#C94027'

let lastSelectedCard 
let selectCount = 0
let findCardsCount = 0;

cards.forEach(card=>{
	card.addEventListener('click',clickEvent)
	card.style.order = Math.floor( Math.random() * cards.length )
})


 function clickEvent() {

 	if (this != lastSelectedCard && selectCount < 2) {
	 	this.classList.remove('hide')
		this.classList.add('show')	
		selectCount++
 	 } else return	


	switch(selectCount){
		case 1 : 
			lastSelectedCard = this
		break

		case 2 : 

			if (this.getAttribute('i')  === lastSelectedCard.getAttribute('i')){
				setTimeout(()=>{

					this.removeEventListener('click', clickEvent);
					lastSelectedCard.removeEventListener('click',clickEvent);

					this.querySelector('.front').style.backgroundColor = correctCardsBg
					lastSelectedCard.querySelector('.front').style.backgroundColor = correctCardsBg

					findCardsCount++
					if( findCardsCount === 8){
						console.log('Congratulation, You Win!')
					}

					selectCount = 0;

				}, 750);

			}
			else {

				setTimeout(()=>{

					this.querySelector('.front').style.backgroundColor = wrongCardsBg
					lastSelectedCard.querySelector('.front').style.backgroundColor = wrongCardsBg

					setTimeout(()=>{

						this.classList.remove('show')
						this.classList.add('hide')

						lastSelectedCard.classList.remove('show')
						lastSelectedCard.classList.add('hide')



						setTimeout(()=>{
							this.querySelector('.front').style.backgroundColor = defaultCardsBg
							lastSelectedCard.querySelector('.front').style.backgroundColor = defaultCardsBg
							selectCount = 0;
								
						},600)

					},600)

				}, 750)

			}

		break
	}
	
}