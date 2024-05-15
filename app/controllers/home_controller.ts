// import type { HttpContext } from '@adonisjs/core/http'

import { HttpContext } from "@adonisjs/core/http";

export default class HomeController {

    async index({inertia}: HttpContext) {
        return inertia.render('home', { version: '1.2' })
    }
}