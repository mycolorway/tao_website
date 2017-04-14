#= require tao
#= require tao/ui/mobile
#= require tao/ui/icons/app
#= require action_cable
#= require mobile/components
#= require_self
#= require_tree .

class Application extends TaoApplication

  _init: ->
    super
    @cable = ActionCable.createConsumer()

  _initPage: ($page) ->
    super
    $page.find('pre code').each (i, block) ->
      hljs?.highlightBlock block

window.app = new Application
