const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard = '';

while (currentCard !== 'spade') {
	currentCard = cards[Math.floor(Math.random() * 4)];
	if (currentCard === 'spade') {
		console.log(`You found the ${currentCard}!`);
	} else {
		continue;
	};
};