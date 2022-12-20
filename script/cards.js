const cards = document.querySelectorAll('.card');
let activeCard = cards[0];

cards.forEach((card) => {
	card.addEventListener('click', () => {
		activeCard.classList.remove('active');
		activeCard = card;
		activeCard.classList.add('active');
	});
});
