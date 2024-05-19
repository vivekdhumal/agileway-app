import vine from '@vinejs/vine'

export const createUserValidator =vine.compile(
    vine.object({
        name: vine.string().trim(),
        email: vine.string().trim().email(),
        password: vine.string().trim().minLength(6).maxLength(16)
    })
)

export const updateUserValidator =vine.compile(
    vine.object({
        name: vine.string().trim(),
        email: vine.string().trim().email(),
        password: vine.string().minLength(6).maxLength(16).nullable(),
    })
)