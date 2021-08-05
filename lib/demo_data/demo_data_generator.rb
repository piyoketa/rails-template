class DemoData::DemoDataGenerator < DemoData::BaseGenerator
  class << self
    def run
      ActiveRecord::Base.transaction do
        # -- Admin -----
        pp "-- create demo staff admin -----"
        AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password')
      end
    end
  end
end
