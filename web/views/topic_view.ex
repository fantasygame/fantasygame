defmodule Fantasygame.TopicView do
  use Fantasygame.Web, :view

  def render("index.json", %{owned_topics: owned_topics}) do
    %{owned_topics: owned_topics}
  end

  def render("show.json", %{topic: topic}) do
    topic
  end

  def render("error.json", %{changeset: changeset}) do
    errors = Enum.map(changeset.errors, fn {field, detail} ->
      %{} |> Map.put(field, detail)
    end)

    %{
      errors: errors
    }
  end
end
