import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'project_users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('project_id').unsigned()
      table.integer('user_id').unsigned()
      table.integer('role_id').unsigned()
      table.foreign('project_id').references('projects.id')
      table.foreign('user_id').references('users.id')
      table.foreign('role_id').references('roles.id')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}