import Project from "#models/project";
import { projectValidator } from "#validators/project";
import { HttpContext } from "@adonisjs/core/http";
import { DateTime } from "luxon";

export default class ProjectsController {

    async index({inertia, request}: HttpContext) {
        const {page = 1, ...qs} = request.qs()
        const limit = 10

        let projectQuery = Project.query();

        if(request.input('search')) {
            projectQuery.whereILike('project_name', "%"+request.input('search')+"%")
            .orWhereILike('project_description', "%"+request.input('search')+"%")
        }

        let projects = await projectQuery.paginate(page, limit)

        projects.baseUrl(request.url()).queryString(qs)
        let pageUrls = projects.getUrlsForRange(1, projects.lastPage)

        return inertia.render('projects/index', {projects, pageUrls});
    }

    async create({inertia}: HttpContext) {

        return inertia.render('projects/create')
    }

    async store({request, response}: HttpContext) {
        const payload = await request.validateUsing(projectValidator)

        const project = new Project()
        project.projectName = payload.project_name
        project.projectDescription = request.input('project_description')

        if(request.input('start_date')) {
            project.projectStartDate = DateTime.fromISO(request.input('start_date'))
        }

        if(request.input('end_date')) {
            project.projectEndDate = DateTime.fromISO(request.input('end_date'))
        }

        await project.save()

        return response.redirect().toRoute('projects.index')
    }
}