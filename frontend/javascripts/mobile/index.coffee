import './components'

import BaseApplication from '../application'

class MobileApplication extends BaseApplication

  _init: ->
    super()

    # enable :active style for interactable elements
    document.addEventListener('touchstart', (-> {}), true)


window.app = new MobileApplication
