import User from "#models/user";
import { createUserValidator, updateUserValidator } from "#validators/user";
import { HttpContext } from "@adonisjs/core/http";

export default class UsersController {

    async index({inertia, request}: HttpContext) {
        const {page = 1, ...qs} = request.qs()
        const limit = 10

        let users = await User.query().paginate(page, limit);

        users.baseUrl(request.url()).queryString(qs)
        let pageUrls = users.getUrlsForRange(1, users.lastPage);

        return inertia.render('users/index', {users, pageUrls})
    }

    async create({inertia}: HttpContext) {
        return inertia.render('users/create');
    }

    async store({request, response}: HttpContext) {
        const payload = await request.validateUsing(createUserValidator);

        const user = new User()
        user.fullName = payload.name
        user.email = payload.email
        user.password = payload.password

        await user.save()

        return response.redirect().toRoute('users.index')
    }

    async edit({inertia, request}: HttpContext) {
        const user = await User.find(request.param('id'));

        return inertia.render('users/edit', {user});
    }

    async update({request, response}: HttpContext) {
        const user = await User.find(request.param('id'))
        const payload = await request.validateUsing(updateUserValidator, {meta: {
            userId: user!.id
        }})

        if(user) {
            user.fullName = payload.name
            user.email = payload.email
    
            if(payload.password) {
                user.password = payload.password
            }
    
            await user.save()
        }

        return response.redirect().toRoute('users.index')
    }

    async destroy({request, response}: HttpContext) {
        const user = await User.find(request.param('id'));

        user?.delete();

        return response.redirect().toRoute('users.index');
    }
}