import Tao from '@mycolorway/tao'
import TaoUI from '@mycolorway/tao_ui'
import TaoForm from '@mycolorway/tao_form'
import $ from 'jquery'

import 'images/desktop'
import 'icons/desktop'
import 'javascripts/desktop'
import 'stylesheets/desktop'

# expose variables for SJR
$.extend window, { $, Tao, TaoUI, TaoForm }
