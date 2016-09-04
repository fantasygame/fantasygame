defmodule Fantasygame.UserTopicTest do
  use Fantasygame.ModelCase

  alias Fantasygame.UserTopic

  @valid_attrs %{}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = UserTopic.changeset(%UserTopic{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = UserTopic.changeset(%UserTopic{}, @invalid_attrs)
    refute changeset.valid?
  end
end
