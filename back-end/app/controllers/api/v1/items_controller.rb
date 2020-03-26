class Api::V1::ItemsController < ApplicationController
        before_action :find_item , only: [:show, :update, :destroy]

    def index 
        items = Item.all 
        # render json: items, only: [:user_id, :name, :description,:imageUrl]
        render json: items, except: [:created_at, :updated_at]

    end 

    def show
        # item = Item.find_by(id: params[:id])
        if @item
            render json: @item, except: [:created_at, :updated_at]
        else
          render json: { message: 'item not found' }
        end
    end

    def create
        item = Item.create(item_params) 
        render json: item, except: [:created_at, :updated_at]  
    end

    def update
        # item = Item.find_by(id: params[:id])
        @item.update(item_params)
        render json: @item, except: [:created_at, :updated_at]
    end 

    def destroy
        item = Item.find_by(id: params[:id])
        item.reviews.each do |review| 
            review.destroy 
        end
        item.destroy  
        render json: item, except: [:created_at, :updated_at]
    end

    private 

    def find_item
        @item = Item.find_by(id: params[:id])
    end  

    def item_params 
        params.require(:item).permit(:user_id, :name, :description,:imageUrl)
    end 

end
