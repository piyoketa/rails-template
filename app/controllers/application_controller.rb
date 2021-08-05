class ApplicationController < ActionController::Base
  http_basic_authenticate_with name: ENV.fetch('CONNECT_BASIC_AUTH_USERNAME'), password: ENV.fetch('CONNECT_BASIC_AUTH_PASSWORD'), if: :basic_authen_required?

  def basic_authen_required?
    ENV.fetch('CONNECT_BASIC_AUTH').to_s.casecmp('true').zero? && !Rails.env.test?
  end
end
