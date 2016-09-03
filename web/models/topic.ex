defmodule Fantasygame.Topic do
  use Fantasygame.Web, :model

  @derive {Poison.Encoder, only: [:id, :title, :user]}

  schema "topics" do
    field :title, :string
    belongs_to :user, Fantasygame.User

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
    from b in query, preload: [:user]
  end
end
