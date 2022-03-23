const BaseRepository = require('../base.repository');
let _link = null;

class LinkRepository extends BaseRepository{
	constructor({Link}) {
		super(Link);
		_link = Link
	}
	async getLinkByTitle(title) {
		return await _link.findOne({title})
	}
}

module.exports = LinkRepository