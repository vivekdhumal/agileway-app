import hash from "@adonisjs/core/services/hash";
import vine from "@vinejs/vine";
import { FieldContext } from "@vinejs/vine/types"
import db from '@adonisjs/lucid/services/db'

type Options = {
    table: string,
    column: string,
}

async function oldPassword(
    value: unknown,
    options: Options,
    field: FieldContext
) {
    if (typeof value !== 'string') {
        return
    }

    const row = await db.from(options.table)
        .select(options.column)
        .where('id', field.meta.userId)
        .first();

    if (! await hash.verify(row.password, value)) {
        field.report('The {{field}} field is not matched', 'oldPassword', field)
    }

    if(row) {
        
    }
}

export const oldPasswordRule = vine.createRule(oldPassword);