'use strict'
const data = use('App/Models/Siswa')

class SiswaController {
    async siswa ({view})  {
        const datas = await data.all()
        return view.render('/siswa', {datas: datas.rows})
    }

    async destroy({ params, response }) {
        const datas = await data.find(params.id)
        await datas.delete()
        return response.route('/siswa')
    }
}

module.exports = SiswaController
