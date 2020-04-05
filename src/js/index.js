import 'core-js/stable'
import 'regenerator-runtime/runtime'

import '../css/index.scss'
import loadButtons from './buttonControl/buttonControl'
import gameConstants from './gameConstants/gameConstants'

loadButtons(gameConstants)
