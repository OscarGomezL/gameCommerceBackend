let _testService = null
class TestController {
	constructor({TestService}){
		_testService= TestService
	}
	index(req,res) {
		return res.send(_testService.index())
	}
}
module.exports = TestController