let _workService = null
const {WorkModel} = require('../models')

class WorkController {
	constructor({WorkService}){
		_workService= WorkService
	}
	async readAll(req,res) {
		let works = await WorkModel.find()
		return res.send(_workService.index(works))
	}
}
module.exports = WorkController