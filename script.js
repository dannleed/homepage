const [like, notLike, knowHow, knowWhat] = [
	'котів, смачну їжу, музику, вечірки, море, річки, ліси, гори, старий київ, старий львів',
	"мороз, спеку, крайнощі, бюрократію, нудьгу, русню, чекати, нав'язливість, затори, брехню",
	'проводити аналіз, збирати інформацію, грати музику, нічого не робити, робити швидко, розбиратися у новому, знаходити відповіді, домовлятися, знаходити спільну мову, відпочивати, розважатися, планувати, керувати командою, доводити до кінця, вчасно зупинитися',
	'html, css, javascript, mongodb, node.js, sql, bootstrap, rest, bpmn, git, google search 😎, npm, figma, oop, react (basics), postman',
];

onLoad();

function onLoad() {
	document.getElementById('like').innerHTML = shuffle(like.split(', '))
		.map((item) => `<div class="additional-info__block-item">${item}</div>`)
		.join('');

	document.getElementById('not-like').innerHTML = shuffle(notLike.split(', '))
		.map((item) => `<div class="additional-info__block-item">${item}</div>`)
		.join('');

	document.getElementById('know-how').innerHTML = shuffle(knowHow.split(', '))
		.map((item) => `<div class="additional-info__block-item">${item}</div>`)
		.join('');

	document.getElementById('know-what').innerHTML = shuffle(knowWhat.split(', '))
		.map((item) => `<div class="additional-info__block-item">${item}</div>`)
		.join('');
}

function shuffle(array) {
	var currentIndex = array.length,
		temporaryValue,
		randomIndex;

	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}
