import { removeElement } from '../utils/utils'
import loadButtons from '../buttonControl/buttonControl'
import { lizardSpock } from '../gameConstants/gameConstants'

export const removeBtns = () => {
	const buttons = document.getElementsByTagName('buttons')
	buttons.forEach((el) => removeElement(el))
}

const switchToLizardSpock = () => {
	removeBtns()
	loadButtons(lizardSpock, true)
}

export default switchToLizardSpock
