class Api::ClapsController < ApplicationController
  def create
    @clap = Clap.find_by(
      clappable_type: params[:clap][:clappable_type],
      clappable_id: params[:clap][:clappable_id],
      clapper_id: current_user.id
    )

    if @clap
      new_clap_count = params[:clap][:clap_count].to_i + @clap.clap_count
      new_clap_count = 50 if new_clap_count > 50

      if @clap.update(clap_count: new_clap_count)
        @clappable = @clap.clappable
        render :show
      else
        render json: @clap.errors.full_messages, status: 422
      end
    else
      @clap = Clap.new(clap_params)
      @clap.clapper_id = current_user.id

      if @clap.save
        @clappable = @clap.clappable
        render :show
      else
        render json: @clap.errors.full_messages, status: 422
      end
    end
  end

  private

  def clap_params
    params.require(:clap).permit(:clappable_type, :clappable_id, :clap_count)
  end
end
