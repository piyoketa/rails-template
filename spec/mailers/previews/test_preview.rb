# Preview all emails at http://localhost:3000/rails/mailers/purchase
class TestPreview < ActionMailer::Preview
  def notify
    TestMailer.notify
  end
end
