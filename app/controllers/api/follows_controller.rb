class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new
    @follow.followed_id = params[:id]
    @follow.follower_id = current_user.id

    @user = User.find(params[:id])
    @currentUserFollows = true

    if @follow.save
      render :show
    else
      debugger
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def destroy
    @follow = Follow.where(
      followed_id: params[:id],
      follower_id: current_user.id
    )

    @follow.first.destroy
    @user = User.find(params[:id])
    @currentUserFollows = false

    render :show
  end

  private

  def follow_params
  end
end
