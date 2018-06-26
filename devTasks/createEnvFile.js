const path = require('path')

const fs = require('fs-extra')

const newEnvFilePath = path.resolve(__dirname, '..', 'config', '.env')

function createEnvFile(){
  fs.outputFile(newEnvFilePath, 'rollbarAccessToken=1234')
    .then(() => {
      console.log(`created new .env file at ${ newEnvFilePath }`)
    })
     .catch(err => {
       console.error(err)
     })
}

module.exports = {
  createEnvFile
}
