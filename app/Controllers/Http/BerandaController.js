'use strict'

class BerandaController {
    beranda ({view})  {
        return view.render('/beranda')
    }
}

module.exports = BerandaController
