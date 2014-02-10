class DemosController < ActionController::Base
  def index; end

  def d01
    render layout: 'd01'
  end

  def d02
    render layout: 'd02'
  end
end