class DocsController < ApplicationController

  def index
  end

  def show
    @doc_path = params[:path]
    @page_class = "docs/#{@doc_path}".split('/').join('-')
    render @doc_path
  end

end
