source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.1.1'
gem 'webpacker', '~> 3.2.0'
# Use sqlite3 as the database for Active Record
gem 'sqlite3'
gem 'mysql2'

# Use Puma as the app server
gem 'puma', '~> 3.0'
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby

# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.5'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 3.0'
# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

gem 'browser', '~> 2.3.0'

# Deployment
gem 'unicorn'
gem 'mina', '~> 0.3.8'
gem 'mina-unicorn', '~> 0.5.0', require: false

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platform: :mri
  gem 'pry-rails'
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '~> 3.0.5'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'i18n-debug'
  gem 'flamegraph'
  gem 'stackprof'
end

gem 'tao_on_rails', github: 'mycolorway/tao_on_rails', branch: :master
gem 'tao_ui', github: 'mycolorway/tao_ui', branch: :master
gem 'tao_form', github: 'mycolorway/tao_form', branch: :master
gem 'tao_editor', github: 'mycolorway/tao_editor', branch: :master
gem 'gon', '~> 6.1.0'
