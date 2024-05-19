// import type { HttpContext } from '@adonisjs/core/http'

import { HttpContext } from "@adonisjs/core/http";

export default class ProjectsController {

    async index({inertia}: HttpContext) {
        let projects = [
            { id: 1, name: "Project One", status: "Active" },
            { id: 2, name: "Project Two", status: "Completed" },
            { id: 3, name: "Project Three", status: "Pending" },
            // Add more projects here
        ];
        return inertia.render('projects/index', { projects });
    }
}