import { Application as TaoApplication } from '@mycolorway/tao'
import ActionCable from 'actioncable'
import hljs from './shared/highlightjs'

class BaseApplication extends TaoApplication

  pageSelector: 'body > .page'

  _init: ->
    super()
    @cable = ActionCable.createConsumer()

  _initPage: ($page) ->
    super $page
    $page.find('pre code').each (i, block) ->
      hljs.highlightBlock block

export default BaseApplication
