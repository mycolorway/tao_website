<% if @person.errors.any? %>
$('.person-form').replaceWith '<%= j render params[:form_tpl], person: @person %>'
<% else %>
# do noting
<% end %>
