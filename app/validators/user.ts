import vine from '@vinejs/vine'
import { oldPasswordRule } from './rules/oldPasword.js'

export const createUserValidator =vine.compile(
    vine.object({
        name: vine.string().trim(),
        email: vine.string().trim().email().unique(async(db, value, field) => {
            const user = await db.from('users')
                        .where('email', value)
                        .first()
            return !user
        }),
        password: vine.string().trim().minLength(6).maxLength(16)
    })
)

export const updateUserValidator =vine.withMetaData<{userId: number}>().compile(
    vine.object({
        name: vine.string().trim(),
        email: vine.string().trim().email().unique(async(db, value, field) => {
            const user = await db.from('users')
                        .whereNot('id', field.meta.userId)
                        .where('email', value)
                        .first()
            return !user
        }),
        password: vine.string().minLength(6).maxLength(16).nullable(),
    })
)


export const profileValidator =vine.withMetaData<{userId: number}>().compile(
    vine.object({
        name: vine.string().trim(),
        email: vine.string().trim().email().unique(async(db, value, field) => {
            const user = await db.from('users')
                        .whereNot('id', field.meta.userId)
                        .where('email', value)
                        .first()
            return !user
        }),
    })
)

export const passwordValidator = vine.withMetaData<{userId: number}>().compile(
    vine.object({
        current_password: vine.string().trim().use(
            oldPasswordRule({table: 'users', column: 'password'})
        ),
        password: vine.string().trim().minLength(6).maxLength(16).confirmed({
            confirmationField: 'password_confirmation'
        }),
        password_confirmation: vine.string().trim(),
    })
)