let _linkService = null

class LinkController {
	constructor({LinkService}) {
		_linkService = LinkService
	}
	async create(req,res) {
		const {body} = req
		const link = await _linkService.create(body)
		return res.status(201).send(link)
	}
	async read(req,res) {
		const {userId} = req.params
		const link = await _linkService.read(userId)
		return res.send(link)
	}
	async readAll(req,res) {
		const links = await _linkService.readAll()
		return res.send(links)
	}
	async update(req,res) {
		const {body} = req;
		const {userId} = req.params;
		const updateLink = await _linkService.update(userId,body)
		return res.send(updateLink)
	}
	async delete(req,res) {
		const {userId} = req.params;
		const deletedLink = await _linkService.delete(userId)
		return res.send(deletedLink)
	}
	async getLinkByTitle(req,res) {
		const {title} = req.params;
		const link = await _linkService.getLinkByTitle(title)
		return res.send(link)
	}
}
module.exports = LinkController