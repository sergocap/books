require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Books
  class Application < Rails::Application
    I18n.enforce_available_locales = false
    config.assets.initialize_on_precompile = false

    config.load_defaults 5.1
    config.i18n.default_locale = :ru
  end
end
