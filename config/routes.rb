Rails.application.routes.draw do
  # 管理画面
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  root to: 'toppages#index'
end
