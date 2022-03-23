class TestService {
	index() {
		const date = new Date()
		return {
			message:`Api running :) ${date}`
		}
	}
}

module.exports = TestService