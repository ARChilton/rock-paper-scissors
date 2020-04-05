import rock from './img/rock.png'
import rockJpg from './img/rock.jpg'
import paper from './img/paper.png'
import paperJpg from './img/paper.jpg'
import scissors from './img/scissors.png'
import scissorsJpg from './img/scissors.jpg'
import lizard from './img/lizard.png'
import lizardJpg from './img/lizard.jpg'
import spock from './img/spock.png'
import spockJpg from './img/spock.jpg'

/**
 * text: the text to show on screen
 * beats: array of options it beats by it's index
 * could be extended to include more possible outcomes
 */
const gameConstants = [
	{
		text: 'rock',
		beats: [2],
		img: rock,
		jpeg: rockJpg,
	},
	{ text: 'paper', beats: [0], img: paper, jpeg: paperJpg },

	{ text: 'scissors', beats: [1], img: scissors, jpeg: scissorsJpg },
]

/**
 * lizard spock example
 */
export const lizardSpock = [
	{
		text: 'rock',
		beats: [2, 3],
		img: rock,
		jpeg: rockJpg,
	},
	{ text: 'paper', beats: [0, 4], img: paper, jpeg: paperJpg },

	{ text: 'scissors', beats: [1, 3], img: scissors, jpeg: scissorsJpg },
	{ text: 'lizard', beats: [4, 1], img: lizard, jpeg: lizardJpg },
	{ text: 'spock', beats: [2, 0], img: spock, jpeg: spockJpg },
]

export default gameConstants
