const Durazno = artifacts.require('Durazno')

contract('Durazno', (accounts) => {
	before(async () => {
		durazno = await Durazno.deployed()
	})

	it('gives the owner of the token 1M tokens', async () => {
		let balance = await durazno.balanceOf(accounts[0])
		balance = web3.utils.fromWei(balance, 'ether')
		console.log(balance)
		assert.equal(
			balance,
			'1000000',
			'Balance should be 1M tokens for contract creator'
		)
	})
})
