import { computerChooses } from './rpsFunctions'

describe('computerChooses', () => {
	it('should select a number between 0 and 2', () => {
		const value = computerChooses(3)
		expect(value).toBeGreaterThan(-1)
		expect(value).toBeLessThan(3)
		expect(Number.isInteger(value)).toBeTruthy()
	})
	it('should select a number between 0 and 4', () => {
		const value = computerChooses(5)
		expect(value).toBeGreaterThan(-1)
		expect(value).toBeLessThan(5)
		expect(Number.isInteger(value)).toBeTruthy()
	})
})
