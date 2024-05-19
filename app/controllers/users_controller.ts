// import type { HttpContext } from '@adonisjs/core/http'

import User from "#models/user";
import { HttpContext } from "@adonisjs/core/http";

export default class UsersController {

    async index({inertia}: HttpContext) {
        let users = await User.all();

        return inertia.render('users/index', {users});
    }

    async create({inertia}: HttpContext) {
        
        return inertia.render('users/create');
    }
}