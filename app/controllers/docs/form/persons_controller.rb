class Docs::Form::PersonsController < ApplicationController

  def create
    @person = Doc::Form::Person.new
    @person.assign_attributes params.fetch(:doc_form_person, {}).permit(:name, :email)
    @person.validate
    respond_to :js
  end

end
