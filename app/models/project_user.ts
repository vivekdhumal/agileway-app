import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class ProjectUser extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare projectId: number

  @column()
  declare userId: number

  @column()
  declare roleId: number
}