module Api
  class TasksController < Api::BaseController
    def index
      @tasks = Task.all
    end

    def create
      @task = Task.create(task_params)
    end

    def show
      @task = Task.find(params[:id])
    end

    def update
      @task = Task.find(params[:id])
      @task.update_attributes(task_params)
    end

    def task_params
      params.require(:task).permit(:description, :completed)
    end
  end
end