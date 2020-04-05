/**
 * takes the score update payload and updates the scoreboard
 * @param {{}} object of scores for destructuring
 */
const updateScoreboard = ({ p1, p2, draw }) => {
	if (typeof p1 === 'number') {
		const s1 = document.getElementById('player1Score')
		s1.innerHTML = p1
	}
	if (typeof p2 === 'number') {
		const s2 = document.getElementById('player2Score')
		s2.innerHTML = p2
	}
	if (typeof draw === 'number') {
		const d = document.getElementById('draws')
		d.innerHTML = draw
	}
}

export default updateScoreboard
