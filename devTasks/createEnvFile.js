const path = require('path')

const fs = require('fs-extra')

const newEnvFilePath = path.resolve(__dirname, '..', 'app', 'config', '.env')

function createEnvFile(){
  console.log(newEnvFilePath)
  fs.outputFile(newEnvFilePath, 'rollbarAccessToken=1234')
     .catch(err => {
       console.error(err)
     })
}

module.exports = {
  createEnvFile
}
