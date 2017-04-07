#= require tao
#= require tao/ui
#= require action_cable
#= require_self
#= require_tree .

class Application extends TaoApplication

  _init: ->
    super
    @cable = ActionCable.createConsumer()

window.app = new Application
