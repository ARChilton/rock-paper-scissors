import playGame, {
	computerChooses,
	resetState,
} from '../rpsFunctions/rpsFunctions'
import switchToLizardSpock, { removeBtns } from '../lizardSpock/lizardSpock'
import gameConstants from '../gameConstants/gameConstants'

/**
 * adds buttons according to the game choices available
 * @param {[{}]} gameChoices all options available to choose
 */
const loadButtons = (gameChoices, lizardSpock) => {
	const numberOfOptions = gameChoices.length
	const loadDefaultButtons = document.getElementById('buttonContainer')
	gameChoices.map((choice, i) => {
		const btn = document.createElement('button')
		btn.innerHTML = choice.text
		btn.onclick = () =>
			playGame(i, computerChooses(numberOfOptions), gameChoices)
		console.log(btn.onclick)
		loadDefaultButtons.appendChild(btn)
	})
	// auto cpu vs cpu button
	const cpuBtn = document.createElement('button')
	cpuBtn.innerHTML = 'auto'
	cpuBtn.onclick = () =>
		playGame(
			computerChooses(numberOfOptions),
			computerChooses(numberOfOptions),
			gameChoices
		)
	loadDefaultButtons.appendChild(cpuBtn)

	// reset state button
	const resetBtn = document.createElement('button')
	resetBtn.innerHTML = 'reset game'
	resetBtn.onclick = () => resetState()
	loadDefaultButtons.appendChild(resetBtn)

	const lizSpockBtn = document.createElement('button')
	lizSpockBtn.innerHTML = lizardSpock
		? 'switch to standard'
		: 'switch to lizard spock'
	lizSpockBtn.onclick = lizardSpock
		? () => {
				removeBtns()
				loadButtons(gameConstants)
				// eslint-disable-next-line no-mixed-spaces-and-tabs
		  }
		: () => switchToLizardSpock()

	loadDefaultButtons.appendChild(lizSpockBtn)
}

export default loadButtons
