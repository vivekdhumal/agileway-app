/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import HomeController from '#controllers/home_controller'
import ProjectsController from '#controllers/projects_controller'
import UsersController from '#controllers/users_controller'
import router from '@adonisjs/core/services/router'
//router.on('/').renderInertia('home', { version: 6 })

router.get('/', [HomeController, 'index'])
router.get('/projects', [ProjectsController, 'index'])
router.resource('/users', UsersController).except(['show'])
