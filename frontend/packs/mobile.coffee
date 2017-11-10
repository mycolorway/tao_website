import Tao from '@mycolorway/tao'
import TaoUi from '@mycolorway/tao_ui/frontend/javascripts/mobile'
import TaoForm from '@mycolorway/tao_form/frontend/javascripts/mobile'
import $ from 'jquery'

import 'javascripts/mobile'
import 'stylesheets/mobile'
import 'images/mobile'
import 'icons/mobile'

# expose variables for SJR
$.extend window, { $, Tao, TaoUi, TaoForm }
