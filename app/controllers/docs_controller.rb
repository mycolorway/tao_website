class DocsController < ApplicationController

  def index
  end

  def show
    @doc_path = params[:path]
    @page_class = %Q(docs #{"docs/#{@doc_path}".split('/').join('-')})
    render "docs/#{@doc_path}"
  end

end
