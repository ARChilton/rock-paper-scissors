import { computerChooses, winner } from './rpsFunctions'

describe('computerChooses()', () => {
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

describe('winner()', () => {
	it('should state draw', () => {
		const output = 'draw'
		const scissor = winner(2, 2)
		const paper = winner(1, 1)
		const rock = winner(0, 0)
		expect(rock).toEqual(output)
		expect(paper).toEqual(output)
		expect(scissor).toEqual(output)
	})
	it('should state p1 wins', () => {
		const output = 'player 1 wins'
		const rock = winner(0, 2)
		const paper = winner(1, 0)
		const scissor = winner(2, 1)
		expect(rock).toEqual(output)
		expect(paper).toEqual(output)
		expect(scissor).toEqual(output)
	})
	it('should state p2 wins', () => {
		const output = 'player 2 wins'
		const rock = winner(2, 0)
		const paper = winner(0, 1)
		const scissor = winner(1, 2)
		expect(rock).toEqual(output)
		expect(paper).toEqual(output)
		expect(scissor).toEqual(output)
	})
})
