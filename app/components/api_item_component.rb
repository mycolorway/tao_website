class ApiItemComponent < ApplicationComponent

  attr_reader :name, :params, :tags

  def initialize view, options = {}
    @name = options.delete(:name)
    @params = options.delete(:params)
    @tags = options.delete(:tags)
    super view, options
  end

  private

  def default_options
    {class: 'api-item'}
  end

end
