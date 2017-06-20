if Rails.env.development?
  if ENV["I18N_DEBUG"]
    I18n::Debug.on_lookup = lambda do |key, result|
      Rails.logger.debug("[i18n-debug] #{key} => #{result.inspect}") if result.nil?
    end
  else
    I18n::Debug.logger = Logger.new("/dev/null")
  end
end
