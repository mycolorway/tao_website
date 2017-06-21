#= require action_cable
#= require tao
#= require tao/ui/mobile
#= require tao/ui/icons/app
#= require mobile/components
#= require application
#= require_self
#= require_tree .

class MobileApplication extends Application

  _init: ->
    super

    # enable :active style for interactable elements
    document.addEventListener('touchstart', (-> {}), true)

window.app = new MobileApplication
