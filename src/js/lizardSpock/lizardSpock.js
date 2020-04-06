import { removeElement } from '../utils/utils'
import loadButtons from '../buttonControl/buttonControl'
import { lizardSpock } from '../gameConstants/gameConstants'

export const removeBtns = () => {
	const buttons = document.getElementsByTagName('button')
	while (buttons.length > 0) {
		removeElement(buttons[0])
	}
}

const switchToLizardSpock = () => {
	removeBtns()
	loadButtons(lizardSpock, true)
}

export default switchToLizardSpock
