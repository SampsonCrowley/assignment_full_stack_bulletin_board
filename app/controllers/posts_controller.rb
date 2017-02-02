class PostsController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index, :show]
  before_action :find_post, except: [:index, :create]

  def index
    posts = Post.all
    render json: posts
  end

  def show
    post = Post.find_by(id: params[:id])
    render json: post
  end

  def create
    post = current_user.posts.build(post_params)
    if post.save
      render json: post
    else
      render json: post.errors.full_messages, status: 422
    end
  end

  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def destroy
    if @post.delete
      render json: @post.id
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  private
   def find_post
     @post = current_user.posts.find_by(id: params[:id])
   end

   def post_params
     params.require(:post).permit(:body, :author, :title, :user_id)
   end
end
