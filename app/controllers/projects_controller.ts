// import type { HttpContext } from '@adonisjs/core/http'

import Project from "#models/project";
import { HttpContext } from "@adonisjs/core/http";

export default class ProjectsController {

    async index({inertia, request}: HttpContext) {
        const {page = 1, ...qs} = request.qs()
        const limit = 10

        let projectQuery = Project.query();

        let projects = await projectQuery.paginate(page, limit)

        projects.baseUrl(request.url()).queryString(qs)
        let pageUrls = projects.getUrlsForRange(1, projects.lastPage)

        return inertia.render('projects/index', {projects, pageUrls});
    }
}