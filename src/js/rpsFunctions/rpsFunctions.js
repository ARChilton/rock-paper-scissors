import updateScoreboard from '../scoreboard/scoreboard'
import gameConstants from '../gameConstants/gameConstants'
import { removeElement } from '../utils/utils'
/**
 * initial scores
 */
const currentScore = {
	p1: 0,
	draw: 0,
	p2: 0,
}

/**
 * random number generator from number of options
 * @param {[{}]} numberOfOptions array of game options
 */
export const computerChooses = (numberOfOptions = gameConstants.length) =>
	Math.floor(Math.random() * numberOfOptions)

/**
 * works out the winner
 * @param {number} player1
 * @param {number} player2
 * @param {[{}]} gameRules
 */
export const winner = (player1, player2, gameRules = gameConstants) => {
	if (player1 === player2) {
		return 'draw'
	}
	if (gameRules[player1].beats.includes(player2)) {
		// player 1 beats player 2
		return 'player 1 wins'
	}
	return 'player 2 wins'
}

/**
 * updates the images for the result
 * @param {[{}]} gameRules
 * @param {number} index
 * @param {number} player
 * @param {boolean} reset
 */
const updateImg = (gameRules = gameConstants, index, player, reset) => {
	const img = document.getElementById(`player${player}Img`)
	if (reset) {
		img.className = 'hide'
		return 'hidden'
	} else if (img.className === 'hide') {
		img.className = ''
	}
	img.src = gameRules[index].img
	img.onerror = () => {
		const { jpeg } = gameRules[index]
		if (jpeg && jpeg !== img.src) {
			img.src = jpeg
		} else {
			console.warn('no replacement image')
		}
	}
	return true
}

/**
 * resets the images / hides them
 */
const resetImgs = () => {
	updateImg(null, null, 1, true)
	updateImg(null, null, 2, true)
}

/**
 * resets the game state
 */
export const resetState = () => {
	currentScore.p1 = 0
	currentScore.p2 = 0
	currentScore.draw = 0
	resetImgs()
	updateScoreboard({ ...currentScore })
	const winStatement = document.getElementById('winContainer')
	// for ie - removeChild() because no remove()
	removeElement(winStatement)
}

/**
 * runs the game
 * @param {number} player1
 * @param {number} player2
 * @param {[{}]} gameRules game options available
 */
const playGame = (
	player1,
	player2 = computerChooses(),
	gameRules = gameConstants
) => {
	const wonBy = winner(player1, player2, gameRules)
	let winDialog = document.getElementById('winDialog')

	if (!winDialog) {
		// adds the win dialog if its not there already
		const winContainer = document.createElement('div')
		winContainer.id = 'winContainer'
		winDialog = document.createElement('h2')
		// for ie appendChild() because no append()
		winContainer.appendChild(winDialog)
		document.body.appendChild(winContainer)
		winDialog.id = 'winDialog'
	}

	resetImgs()
	// prevents buttons being pressed while running
	const buttons = document.getElementsByTagName('button')
	buttons.forEach((btn) => {
		btn.className = 'noClick'
	})

	// begins 3,2,1 countdown like in real rock paper scissors
	winDialog.innerHTML = 3
	setTimeout(() => {
		winDialog.innerHTML = 2
	}, 1000)
	setTimeout(() => {
		winDialog.innerHTML = 1
	}, 2000)
	setTimeout(() => {
		// reveals who won
		winDialog.innerHTML = wonBy
		// updates the images
		updateImg(gameRules, player1, 1)
		updateImg(gameRules, player2, 2)
		// updates the scoreboard
		switch (wonBy) {
			case 'player 1 wins':
				currentScore.p1++
				updateScoreboard({ p1: currentScore.p1 })
				break
			case 'player 2 wins':
				currentScore.p2++
				updateScoreboard({ p2: currentScore.p2 })
				break
			case 'draw':
				currentScore.draw++
				updateScoreboard({ draw: currentScore.draw })
		}
		// re-instates buttons
		buttons.forEach((btn) => {
			btn.className = ''
		})
	}, 3000)
}

export default playGame
