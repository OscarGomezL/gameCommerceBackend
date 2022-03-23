const BaseService = require("./base.service");
let _linkRepository = null

class LinkService extends BaseService {
	constructor({LinkRepository}) {
		super(LinkRepository)
		_linkRepository = LinkRepository
	}
	async getLinkByTitle(title) {
		return await _linkRepository.getLinkByTitle(title)
	}
}
module.exports = LinkService