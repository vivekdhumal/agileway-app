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

router.get('/', [HomeController, 'index']).use(middleware.auth())
router.get('/login', [LoginController, 'showLogin']).use(middleware.guest());
router.post('/login', [LoginController, 'login']).use(middleware.guest());
router.get('/projects', [ProjectsController, 'index']).use(middleware.auth())
router.resource('/users', UsersController).except(['show']).use('*', middleware.auth())
router.post('/logout', [LoginController, 'logout']).use(middleware.auth());