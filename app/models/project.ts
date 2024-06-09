import { DateTime } from 'luxon'
import { BaseModel, column, computed } from '@adonisjs/lucid/orm'
import string from "@adonisjs/core/helpers/string"

export default class Project extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare projectName: string

  @column()
  declare projectDescription: string | null

  @column.date({
    serialize: (value: DateTime | null) => {
      return value ? value.setZone('utc').toFormat('dd-MM-yyyy') : value
    },
  })
  declare projectStartDate: DateTime | null

  @column.date({
    serialize: (value: DateTime | null) => {
      return value ? value.setZone('utc').toFormat('dd-MM-yyyy') : value
    },
  })
  declare projectEndDate: DateTime | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @computed()
  get shortDescription() {
    return string.truncate(this.projectDescription ?? 'No Description', 50)
  }
}