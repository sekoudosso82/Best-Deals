class Api::V1::ReviewsController < ApplicationController
        # before_action :main_met, only: [:show, edit, :update, :delete]

    def index 
        reviews = Review.all 
        render json: reviews 
    end 

    def show

        review = Review.find_by(id: params[:id])
        if review 
            render json: review.to_json( :include =>{
                :user => {:only => [:userName]},
                :item => {:only => [:user_id, :name, :description, :imageUrl]}
            } , :except => [:created_at, :updated_at])
        else
            render json: { message: "no such review reference"}
        end 

    end

    def create   
        review = Review.create(review_params)
        render json: review, except: [:created_at, :updated_at]

    end

    def update 
        review = Review.find_by(id: params[:id])
        review.update(review_param)
        render json: review, except: [:created_at, :updated_at]
    end 

    def destroy  
        review = Review.find_by(id: params[:id])
        review.destroy
        render json: review, except: [:created_at, :updated_at]
    end 

    private 

    def review_params
        params.require(:review).permit(:item_id, :user_id, :comment)
    end 



end
