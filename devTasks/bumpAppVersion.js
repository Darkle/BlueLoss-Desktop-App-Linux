// @ts-nocheck
const path = require('path')

const exeq = require('exeq')
const fs = require('fs-extra')
const moment = require('moment')

const basePath = path.join(__dirname, '..')
const updateInfoJsonFilePath = path.join(basePath, 'updateInfo.json')
const newAppVersion = `${moment().year()}.${moment().month() + 1}.${moment().date()}`

function bumpVersion(){
  return exeq(`npm version ${newAppVersion}`)
    .then(() => fs.writeJson(updateInfoJsonFilePath, { latestVersion: newAppVersion }))
    .then(() => {
      console.log(`Successfully bumped BlueLoss version to ${ newAppVersion }`)
    })
    .catch(err => {
      console.error('There was an error running bumpVersion', err)
    })
}

module.exports = {
  bumpVersion
}
