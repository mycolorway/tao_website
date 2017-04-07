module Docs
  module Form

    class Person
      include ActiveModel::Model

      attr_accessor :name, :email

      validates_presence_of :name, :email

    end

  end
end
