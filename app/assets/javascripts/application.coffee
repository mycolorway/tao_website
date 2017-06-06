
class Application extends TaoApplication

  _init: ->
    super
    @cable = ActionCable.createConsumer()

  _initPage: ($page) ->
    super

    if hljs
      $page.find('pre code').each (i, block) ->
        hljs?.highlightBlock block

window.Application = Application
