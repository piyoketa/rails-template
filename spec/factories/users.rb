FactoryBot.define do
  factory :user do
    sequence(:email) { |n| "user#{n}__#{SecureRandom.uuid}@example.com" }
    name { '苗字 名前' }
    name_kana { 'ミョウジ ナマエ' }
  end
end
