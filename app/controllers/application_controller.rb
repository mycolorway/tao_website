class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  before_action :set_variant, :set_gon

  protected

  def set_variant
    request.variant = :mobile if browser.device.mobile?
  end

  def set_gon
    gon.env = Rails.env
    gon.locale = I18n.locale
  end

end
