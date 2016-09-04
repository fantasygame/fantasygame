defmodule Fantasygame.PostController do
  use Fantasygame.Web, :controller

  plug Guardian.Plug.EnsureAuthenticated, handler: Fantasygame.SessionController

  alias Fantasygame.{Repo, Post}

  def index(conn, _params) do
    posts = Repo.all from p in Post, preload: [:user, :topic]

    render(conn, "index.json", posts: posts)
  end
end
