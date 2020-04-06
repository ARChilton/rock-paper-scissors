import switchToLizardSpock, { removeBtns } from './lizardSpock'

describe('removeBtns()', () => {
	it('should remove the buttons from the html', () => {
		document.body.innerHTML = `<div id="buttonContainer"><button>rock</button><button>paper</button><button>scissors</button><button>auto</button><button>reset game</button><button>switch to lizard spock</button></div>`
		removeBtns()
		expect(document.body.innerHTML).toEqual(`<div id="buttonContainer"></div>`)
	})
})

describe('switchToLizardSpock()', () => {
	it('should switch the buttons to lizardSpock', () => {
		document.body.innerHTML = `<div id="buttonContainer"><button>rock</button><button>paper</button><button>scissors</button><button>auto</button><button>reset game</button><button>switch to lizard spock</button></div>`
		switchToLizardSpock()
		expect(document.body.innerHTML).toEqual(
			`<div id="buttonContainer"><button>rock</button><button>paper</button><button>scissors</button><button>lizard</button><button>spock</button><button>auto</button><button>reset game</button><button>switch to standard</button></div>`
		)
	})
})
