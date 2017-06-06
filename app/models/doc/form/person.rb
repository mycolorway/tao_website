module Doc
  module Form

    class Person
      include ActiveModel::Model

      attr_accessor :name, :nickname, :email, :age, :gender, :comment,
        :married, :handsome, :colors, :city, :birthday, :birth_time

      validates_presence_of :name, :email

    end

  end
end
