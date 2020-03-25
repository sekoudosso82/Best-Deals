class Api::V1::UsersController < ApplicationController

    def index 
        users = User.all 
        render json: users.to_json(except: [:created_at, :updated_at])  
    end 

    def show  
         user = User.find_by(id: params[:id])
         if user
            render json: user, except: [:created_at, :updated_at]
        else
          render json: { message: 'user not found' }
        end
         
    end 

    def create
        user = User.create(user_params) 
        render json: user, except: [:created_at, :updated_at]  
    end

    def update
        user = user.find_by(id: params[:id])
        user.update(user_params)
        render json: user, except: [:created_at, :updated_at]
    end 

    def destroy
        user = user.find_by(id: params[:id])
        user.destroy  
    end

    def user_params
        params.require(:user).permit(:userName)
    end 


end
