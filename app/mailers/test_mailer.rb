class TestMailer < ApplicationMailer
  def notify
    mail subject: 'テストメール', to: 'example@example.com'
  end
end
