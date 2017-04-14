
class MobileHeader extends TaoComponent

  @tag 'tao-mobile-header'

  @attribute 'active', type: 'boolean'

  _connected: ->
    @on "click.#{@taoId}", '.link-nav', =>
      @active = !@active

  _disconnected: ->
    @off "click.#{@taoId}"

  beforeCache: ->
    @active = false

TaoComponent.register MobileHeader
