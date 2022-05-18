'use strict'
const Tipe = use('App/Models/Tipe')
const data = use('App/Models/Siswa')

class InputController {
    async input ({view})  {
        const tipes = await Tipe.all()
        return view.render('/input-masalah', {tipes: tipes.rows})
    }

    async store ({ request, response }) {
        const datas = new data()
        datas.nama = request.input('nama')
        datas.nik = request.input('nik')
        datas.status = request.input('status')
        datas.tipe = request.input('tipe')
        await datas.save()
        return response.redirect('/input-masalah')
    }
}

module.exports = InputController
