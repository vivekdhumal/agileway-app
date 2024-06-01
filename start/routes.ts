/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import HomeController from '#controllers/home_controller'
import LoginController from '#controllers/login_controller'
import ProjectsController from '#controllers/projects_controller'
import UsersController from '#controllers/users_controller'
import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'
import ProfileController from '#controllers/profile_controller'


router.get('/login', [LoginController, 'showLogin']).use(middleware.guest());
router.post('/login', [LoginController, 'login']).use(middleware.guest());

router.group(() => {
    router.get('/', [HomeController, 'index']).use(middleware.auth())
    router.get('/projects', [ProjectsController, 'index'])
    router.resource('/users', UsersController).except(['show'])
    router.post('/logout', [LoginController, 'logout']);
    router.get('/profile', [ProfileController, 'show'])
    router.put('/updateProfile', [ProfileController, 'updateProfile'])
    router.put('/updatePassword', [ProfileController, 'updatePassword'])
}).use(middleware.auth())