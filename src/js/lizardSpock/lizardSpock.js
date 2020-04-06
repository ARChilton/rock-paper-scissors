import { removeElement } from '../utils/utils'
import loadButtons from '../buttonControl/buttonControl'
import { lizardSpock } from '../gameConstants/gameConstants'

/**
 * removes all buttons from the app
 */
export const removeBtns = () => {
	const buttons = document.getElementsByTagName('button')
	while (buttons.length > 0) {
		removeElement(buttons[0])
	}
}

/**
 * Switches the buttons to the lizard spock set up
 * I would test this using a tool like cypress as well as the unit test
 */
const switchToLizardSpock = () => {
	removeBtns()
	loadButtons(lizardSpock, true)
}

export default switchToLizardSpock
