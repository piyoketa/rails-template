# frozen_string_literal: true

require 'rails_helper'

RSpec.describe '/subscriptions/', type: :request do
  let(:endpoint) { '/subscriptions/' }

  describe 'POST /subscriptions/' do
    context '正常系' do
      it 'Status 302 を返す' do
        expect(Subscription.all.length).to eq 0

        post endpoint, params: { email: 'piyotekeru@gmail.com' }

        expect(Subscription.all.length).to eq 1
        expect(response.status).to eq 302
      end
    end
  end
end
