defmodule Fantasygame.Topic do
  use Fantasygame.Web, :model

  alias Fantasygame.{Post, User}

  @derive {Poison.Encoder, only: [:id, :title, :user, :posts]}

  schema "topics" do
    field :title, :string
    belongs_to :user, User
    has_many :posts, Post

    timestamps
  end

  @required_fields ~w(title name_id)
  @optional_fields ~w()

  @doc """
  Creates a changeset based on the `model` and `params`.

  If no params are provided, an invalid changeset is returned
  with no validation performed.
  """
  def changeset(model, params \\ :empty) do
    model
    |> cast(params, @required_fields, @optional_fields)
  end

  def preload_all(query) do
    posts_query = from p in Post, order_by: [desc: p.inserted_at], preload: :user
    from b in query, preload: [:user, posts: ^posts_query]
  end
end
