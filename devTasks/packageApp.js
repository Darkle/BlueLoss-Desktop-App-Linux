// @ts-nocheck
const path = require('path')

// const { compile } = require('nexe')
const { exec } = require('pkg')
const exeq = require('exeq')
const chalk = require('chalk')
const del = require('del')
const stringifyObject = require('stringify-object')
// const Zip = require('node-7z')

const basePath = path.resolve(__dirname, '..')
const inputJSfile = path.join(basePath, 'app', 'appMain-compiled.js')
const platformBuildFolder = path.join(basePath, 'build')
const globsForCleanPlatformFolder = [path.join(platformBuildFolder, '**', '*.*'), path.join(platformBuildFolder, '**'), `!${ platformBuildFolder }`]
// const archive7zip = new Zip()


function packageLinux64() {
  return prepareForPackaging()
    // .then(() => compile({
    //   input: inputJSfile,
    //   resources: [],
    //   build: true,
    //   python: '/usr/bin/python'
    //   // target: `Linux-x64-${appVersion }`
    // }))
    .then(() =>
      exec(
        [
          inputJSfile,
          '--target',
          'node8-linux-x64',
          '--output',
          'build/BlueLoss'
        ]
      )
    )
    // .then(createPortableVersion)
    // .then(createSnap)
    // .then(createAppImage)
    .then(() => {
      console.log(chalk.green('Successfully Packaged App!'))
    })
    .catch(err => {
      console.error(chalk.red(`There was an error creating the package`), err)
    })
}


function prepareForPackaging(){
  return webpackBuild()
    .then(() => {
      console.log(chalk.yellow(`Cleaning: \n ${ stringifyObject(globsForCleanPlatformFolder) }`))
      return del(globsForCleanPlatformFolder, { glob: true })
    })
}

// function createPortableVersion() {
//   return archive7zip.add(
//     path.join(platformBuildFolder, `BlueLoss-Windows-Portable-(x86_64-${ appVersion }).7z`),
//     path.join(platformBuildFolder, 'BlueLoss-win32-x64')
//   )
// }

// function createSnap() { } // make sure that it sets the right .desktop stuff

// function createAppImage(){} // make sure that it sets the right .desktop stuff


function webpackBuild() {
  console.log(chalk.blue('Running Webpack Build'))
  return exeq(`cross-env NODE_ENV=production parallel-webpack`)
}

module.exports = {
  packageLinux64,
  webpackBuild,
}
