defmodule Fantasygame.TopicController do
  use Fantasygame.Web, :controller

  plug Guardian.Plug.EnsureAuthenticated, handler: Fantasygame.SessionController

  alias Fantasygame.{Repo, Topic}

  def index(conn, _params) do
    current_user = Guardian.Plug.current_resource(conn)

    owned_topics = current_user
      |> assoc(:owned_topics)
      |> Topic.preload_all
      |> Repo.all

    render(conn, "index.json", owned_topics: owned_topics)
  end

  def create(conn, %{"topic" => topic_params}) do
    current_user = Guardian.Plug.current_resource(conn)

    changeset = current_user
      |> build_assoc(:owned_topics)
      |> Topic.changeset(topic_params)

    case Repo.insert(changeset) do
      {:ok, topic} ->
        conn
        |> put_status(:created)
        |> render("show.json", topic: topic )
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render("error.json", changeset: changeset)
    end
  end
end
