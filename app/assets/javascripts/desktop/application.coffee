#= require tao
#= require tao/ui
#= require action_cable
#= require desktop/components
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
