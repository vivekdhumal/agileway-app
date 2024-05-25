// import type { HttpContext } from '@adonisjs/core/http'

import User from "#models/user";
import { LoginValidator } from "#validators/login";
import { HttpContext, Redirect } from "@adonisjs/core/http";
import {errors as authErrors} from '@adonisjs/auth'


export default class LoginController {

    async showLogin({inertia}: HttpContext) {
        return inertia.render('login');
    }

    async login({ request, response, auth, session }: HttpContext) {
        const payload = await request.validateUsing(LoginValidator)

        const user = await User.verifyCredentials(payload.email, payload.password)

        await auth.use('web').login(user)
    
        return response.redirect('/')
    }

    async logout({auth, response}: HttpContext) {
        await auth.use('web').logout()

        return response.redirect('/login')
    }
}