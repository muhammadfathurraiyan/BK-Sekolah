'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Route.on('/').render('signin')

Route.get('/signin', 'SigninController.signin')
Route.post('/signin', 'SigninController.login')
Route.get('/signin', 'SigninController.logout')

Route.get('/signup', 'SignupController.signup')
Route.post('/signup', 'SignupController.store')

Route.get('/beranda', 'BerandaController.beranda')

Route.get('/input-masalah', 'InputController.input')
Route.post('/input-masalah', 'InputController.store')

Route.get('tipe-masalah', 'TipeController.tipe')
Route.post('/tipe-masalah', 'TipeController.store')
Route.delete('/tipe-masalah/:id', 'TipeController.destroy')

Route.get('/siswa', 'SiswaController.siswa')
Route.delete('/siswa/:id', 'SiswaController.destroy')