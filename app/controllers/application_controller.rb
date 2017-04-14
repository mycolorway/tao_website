class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  before_action :set_variant

  protected

  def set_variant
    request.variant = :mobile if browser.device.mobile?
  end

end
