defmodule Fantasygame.Repo.Migrations.CreatePost do
  use Ecto.Migration

  def change do
    create table(:posts) do
      add :text, :text, null: false
      add :user_id, references(:users, on_delete: :nothing), null: false
      add :topic_id, references(:topics, on_delete: :nothing), null: false

      timestamps
    end
    create index(:posts, [:user_id])
    create index(:posts, [:topic_id])

  end
end
