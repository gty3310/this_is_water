class Api::StoriesController < ApplicationController
  def index
    @stories = Story.all
    render :index
  end

  def create
    @story = Story.new(story_params)
    @story.author_id = current_user.id
    @story.publish_date = Date.new

    if @story.save
      render :show
    else
      render json: @story.errors.full_messages, status: 422
    end
  end

  def show
    @story = Story.find(params[:id])

    if @story
      render :show
    else
      render json: ["Story doesn't exist"], status: 404
    end
  end

  def update
    @story = Story.find(params[:id])
    if @story.update(story_params)
      render :show
    else
      render json: @story.errors.full_messages, status: 422
    end
  end

  def destroy
    @story.find(params[:id])
    @story.destroy
    @stories = Story.all
    render :index
  end

  private

  def story_params
    params.require(:story).permit(:title, :body, :image_url, :video_url)
  end
end
