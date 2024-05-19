// import type { HttpContext } from '@adonisjs/core/http'

import User from "#models/user";
import { createUserValidator, updateUserValidator } from "#validators/user";
import { HttpContext } from "@adonisjs/core/http";
import hash from "@adonisjs/core/services/hash";

export default class UsersController {

    async index({inertia}: HttpContext) {
        let users = await User.all();

        return inertia.render('users/index', {users});
    }

    async create({inertia}: HttpContext) {
        return inertia.render('users/create');
    }

    async store({request, response}: HttpContext) {
        const payload = await request.validateUsing(createUserValidator);

        const user = new User()
        user.fullName = payload.name
        user.email = payload.email
        user.password = await hash.make(payload.password)

        await user.save()

        return response.redirect().toRoute('users.index')
    }

    async edit({inertia, request}: HttpContext) {
        const user = await User.find(request.param('id'));

        return inertia.render('users/edit', {user});
    }

    async update({request, response}: HttpContext) {
        const user = await User.find(request.param('id'))
        const payload = await request.validateUsing(updateUserValidator)

        if(user) {
            user.fullName = payload.name
            user.email = payload.email
    
            if(payload.password) {
                user.password = await hash.make(payload.password)
            }
    
            await user.save()
        }

        return response.redirect().toRoute('users.index')
    }
}