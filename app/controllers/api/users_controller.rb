class Api::UsersController < ApplicationController

  before_action :require_logged_in, only: [:show, :update]

  def index
    @users = User.all

    render :index
  end

  def show
    @user = User.find(params[:id])

    if @user
      render 'api/users/profile'
    else
      render json: ["User doesn't exist"], status: 404
    end
  end

  def create
    @user = User.new(user_params)
    #

    if @user.save
      login!(@user)
      render :show
    else

      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find_by(params[:id])

    if @user.update(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :image_url, :biography)
  end
end
