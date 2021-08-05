# frozen_string_literal: true

require 'rails_helper'

RSpec.describe '/products/:id', type: :request do
  let(:endpoint) { "/products/#{product_category.id}" }
  let(:product_category) { create(:product_category) }

  describe 'GET /products/:id' do
    context '[条件1] 指定されたIDのproduct_categoryが存在する場合' do
      context '[条件2] microCMSの記事が取得できた場合' do
        include_context 'MicroCmsClient::get_detail　が validな商品種別データを返す場合'
        context '[条件3] product_category.displayed? が trueの場合' do
          context '正常系' do
            let(:product_category) { create(:product_category, :published) }
            it 'status 200 を返す' do
              get endpoint
              expect(response.status).to eq 200
            end
          end
          context '[異常系] product_category.displayed? が false の場合' do
            let(:product_category) { create(:product_category, :with_valid_micro_cms_id) }
            it 'NotFoundを返す' do
              expect { get endpoint }.to raise_error ActiveRecord::RecordNotFound
            end
          end
        end
        context '[異常系] microCMSの記事が取得できなかった場合' do
          include_context 'MicroCmsClient::get_detail　が NotFoundを返す場合'
          let(:product_category) { create(:product_category) }
          it 'NotFoundを返す' do
            expect { get endpoint }.to raise_error ActiveRecord::RecordNotFound
          end
        end
      end
      context '[異常系] 指定されたIDのproduct_categoryが存在しない場合' do
        let(:no_exists_product_category_id) { SecureRandom.uuid }
        it 'NotFoundを返す' do
          expect { get "/products/#{no_exists_product_category_id}" }.to raise_error ActiveRecord::RecordNotFound
        end
      end
    end
  end
end
