import updateScoreboard from './scoreboard'

describe('updateScoreboard()', () => {
	it('should update p1', () => {
		document.body.innerHTML = `<table id="scoreboard"><tbody><tr id="score"><td id="player1Score">0</td><td id="draws">0</td><td id="player2Score">0</td></tr></tbody></table>`
		updateScoreboard({ p1: 45 })
		expect(document.body.innerHTML).toEqual(
			`<table id="scoreboard"><tbody><tr id="score"><td id="player1Score">45</td><td id="draws">0</td><td id="player2Score">0</td></tr></tbody></table>`
		)
	})
	it('should update p2', () => {
		document.body.innerHTML = `<table id="scoreboard"><tbody><tr id="score"><td id="player1Score">0</td><td id="draws">0</td><td id="player2Score">0</td></tr></tbody></table>`
		updateScoreboard({ p2: 5 })
		expect(document.body.innerHTML).toEqual(
			`<table id="scoreboard"><tbody><tr id="score"><td id="player1Score">0</td><td id="draws">0</td><td id="player2Score">5</td></tr></tbody></table>`
		)
	})
	it('should update draws', () => {
		document.body.innerHTML = `<table id="scoreboard"><tbody><tr id="score"><td id="player1Score">0</td><td id="draws">0</td><td id="player2Score">0</td></tr></tbody></table>`
		updateScoreboard({ draw: 1 })
		expect(document.body.innerHTML).toEqual(
			`<table id="scoreboard"><tbody><tr id="score"><td id="player1Score">0</td><td id="draws">1</td><td id="player2Score">0</td></tr></tbody></table>`
		)
	})
})
