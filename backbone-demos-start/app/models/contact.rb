class Contact < ActiveRecord::Base
  def slug
    "#{first_name} #{last_name}".parameterize
  end
end