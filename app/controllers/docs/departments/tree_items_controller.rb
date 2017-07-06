class Docs::Departments::TreeItemsController < ApplicationController

  def index
    @children_departments = (1..8).map do |index|
      {id: "#{params[:department_id]}-#{index}", name: "测试部门 #{index}"}
    end
    respond_to :js
  end

end
