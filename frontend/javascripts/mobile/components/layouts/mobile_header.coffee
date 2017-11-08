import { Component } from '@mycolorway/tao'

class MobileHeader extends Component

  @tag 'tao-mobile-header'

  @attribute 'active', type: 'boolean'

  _connected: ->
    @on "click.#{@taoId}", '.link-nav', =>
      @active = !@active

  _disconnected: ->
    @off "click.#{@taoId}"

  beforeCache: ->
    @active = false

MobileHeader.register()
