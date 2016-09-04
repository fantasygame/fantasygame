defmodule Fantasygame.Post do
  use Fantasygame.Web, :model

  schema "posts" do
    field :text, :string
    belongs_to :user, Fantasygame.User
    belongs_to :topic, Fantasygame.Topic

    timestamps
  end

  @required_fields ~w(text)
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
end
