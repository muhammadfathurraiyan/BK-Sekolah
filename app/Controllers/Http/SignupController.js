'use strict'
const User = use('App/Models/User')

class SignupController {
    async signup ({view})  {
        return view.render('/signup')
    }

    async store ({ request, response}) {
        const user = new User()
        user.username = request.input('username'),
        user.password = request.input('password')
        await user.save()
        return response.redirect('/signup')
    }
}

module.exports = SignupController
