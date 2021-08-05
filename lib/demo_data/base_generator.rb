require 'factory_bot'
require 'forgery_ja'
require 'faker'

class DemoData::BaseGenerator
  class << self
    include FactoryBot::Syntax::Methods
  end

  FactoryBot.definition_file_paths = [ Rails.root.join('spec', 'factories') ]
end