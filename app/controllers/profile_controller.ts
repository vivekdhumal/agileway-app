import { passwordValidator, profileValidator } from '#validators/user';
import type { HttpContext } from '@adonisjs/core/http'

export default class ProfileController {

    async show({inertia, auth}: HttpContext) {
        const user = auth.getUserOrFail();

        return inertia.render('profile/show', {user});
    }

    async updateProfile({auth, request, response, session}:HttpContext) {
        const user = auth.getUserOrFail();
        const payload = await request.validateUsing(profileValidator, {meta: {
            userId: user!.id
        }});

        if(user) {
            user.fullName = payload.name
            user.email = payload.email
    
            await user.save()
        }

        session.flash('success_message', 'Profile information has been updated');
        
        return response.redirect().toRoute('/profile');
    }

    async updatePassword({auth, request, response, session}:HttpContext) {
        const user = auth.getUserOrFail();
        const payload = await request.validateUsing(passwordValidator, {meta: {
            userId: user!.id
        }});

        if(payload.password) {
            user.password = payload.password

            await user.save()
        }

        session.flash('success_message', 'Password has been updated');
        
        return response.redirect().toRoute('/profile');
    }
}