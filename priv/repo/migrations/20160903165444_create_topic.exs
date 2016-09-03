defmodule Fantasygame.Repo.Migrations.CreateTopic do
  use Ecto.Migration

  def change do
    create table(:topics) do
      add :title, :string, null: false
      add :user_id, references(:users, on_delete: :nothing), null: false

      timestamps
    end
    create index(:topics, [:user_id])

  end
end
