import vine from "@vinejs/vine";

export const projectValidator = vine.compile(
    vine.object({
        'project_name': vine.string().trim()
    })
)