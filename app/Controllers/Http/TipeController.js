'use strict'
const Tipe = use('App/Models/Tipe')

class TipeController {
    async tipe ({view})  {
        const tipes = await Tipe.all()
        return view.render('/tipe-masalah', {tipes: tipes.rows})
    }

    async store ({ request, response }) {
        const tp = new Tipe()
        tp.tipe = request.input('tipe')
        await tp.save()
        return response.redirect('/tipe-masalah')
    }

    async destroy({ params, session, response }) {
        const tipe = await Tipe.find(params.id)
        await tipe.delete()
        return response.redirect('/tipe-masalah')
    }
}


module.exports = TipeController
