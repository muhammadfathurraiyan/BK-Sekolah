'use strict'

class SigninController {
    signin ({view})  {
        return view.render('/signin')
    }

    async login ({request, auth, response}) {
        const {username, password} = request.all()
        await auth.attempt(username, password)
        return response.route('/beranda')
    }
    
    async logout ({ auth, response}) {
        await auth.logout()
        return response.route('/signin')
    }
}

module.exports = SigninController
