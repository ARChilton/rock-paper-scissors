import loadButtons from './buttonControl'
import gameConstants, { lizardSpock } from '../gameConstants/gameConstants'

describe('buttonControl()', () => {
	it('should add standard buttons to the html', () => {
		document.body.innerHTML = `<div id="buttonContainer"></div>`
		loadButtons(gameConstants)
		expect(document.body.innerHTML).toEqual(
			`<div id="buttonContainer"><button>rock</button><button>paper</button><button>scissors</button><button>auto</button><button>reset game</button><button>switch to lizard spock</button></div>`
		)
	})
	it('should add lizard spock buttons to the html', () => {
		document.body.innerHTML = `<div id="buttonContainer"></div>`
		loadButtons(lizardSpock, true)
		expect(document.body.innerHTML).toEqual(
			`<div id="buttonContainer"><button>rock</button><button>paper</button><button>scissors</button><button>lizard</button><button>spock</button><button>auto</button><button>reset game</button><button>switch to standard</button></div>`
		)
	})
})
