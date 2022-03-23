class BaseService {
	constructor(repository) {
		this.repository = repository
	}
	async read(id){
		if(!id) {
			const e = new Error()
			e.status = 400
			e.message = "Id must be sent"
			throw e
		}
		const currentEntity = await this.repository.read(id)
		if(!currentEntity) {
			const e = new Error()
			e.status = 404
			e.message = "Entity was not found"
			throw e
		}
		return currentEntity
	}
	async readAll() {
		return await this.repository.readAll();
	}
	async create(entity) {
		return await this.repository.create(entity)
	}
	async update(id, entity) {
		if(!id) {
			const e = new Error()
			e.status = 400
			e.message = "Id must be sent"
			throw e
		}
		return await this.repository.update(id, entity)
	}
	async delete(id) {
		if(!id) {
			const e = new Error()
			e.status = 400
			e.message = "Id must be sent"
			throw e
		}
		return await this.repository.delete(id)
	}
}

module.exports = BaseService