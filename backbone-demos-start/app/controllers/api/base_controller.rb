module Api
  class BaseController < ActionController::Base
    respond_to :json
  end
end