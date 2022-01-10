
require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/jrncrxOk5I58O_8SKXKhhiMHJpd2DfoU',
      accounts: [ '9d7802280bdc182d03214dcf5350f49fb7475bd20ee3b05eced919fccccf20c0' ]
    }
  }
}