require 'rails_helper'

RSpec.describe TestMailer, type: :mailer do
  describe 'notify' do
    let(:mail) { PurchaseMailer.notify }

    it 'renders the headers' do
      expect(mail.subject).to eq('テストメール')
      expect(mail.to).to eq(['example@example.com'])
    end
  end
end
