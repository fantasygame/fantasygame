defmodule Fantasygame.Repo.Migrations.CreateUserTopic do
  use Ecto.Migration

  def change do
    create table(:user_topics) do
      add :user_id, references(:users, on_delete: :nothing), null: false
      add :topic_id, references(:topics, on_delete: :nothing), null: false

      timestamps
    end
    create index(:user_topics, [:user_id])
    create index(:user_topics, [:topic_id])

  end
end
