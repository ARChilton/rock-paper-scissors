export const removeElement = (el) => {
	const parent = el.parentNode
	parent.removeChild(el)
}
