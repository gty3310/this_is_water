class Api::ResponsesController < ApplicationController
  def create
    @response = Response.new(response_params)
    @response.responder_id = current_user.id

    if @response.save
      render :show
    else
      
      render json: @response.errors.full_messages, status: 422
    end
  end

  def destroy
    @response = Response.find_by(story_id: params[:id], responder_id: current_user.id)

    @response.destroy
    render :show
  end

  private

  def response_params
    params.require(:response).permit(:story_id, :body)
  end
end
