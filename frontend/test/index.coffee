import '../packs/desktop'
import $ from 'jquery'
import { expect } from 'chai'

describe 'Tao Website', ->

  it 'should expose some global vars for SJR', ->
    expect(window.$).to.be.ok
    expect(window.Tao).to.be.ok
    expect(window.TaoUI).to.be.ok
    expect(window.TaoForm).to.be.ok
