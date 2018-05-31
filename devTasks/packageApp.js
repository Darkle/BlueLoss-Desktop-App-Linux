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
const stylusInput = path.join(basePath, 'app', 'frontEnd', 'assets', 'styles', 'stylus', 'index.styl')
const stylusOutput = path.join(basePath, 'app', 'frontEnd', 'assets', 'styles', 'css', 'settingsWindowCss-compiled.css')
// const appVersion = require(path.join(basePath, 'package.json')).version
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
          'app.exe'
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
  return stylusBuild()
    .then(webpackBuild)
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

/**
 * This is seperate as we want one just for building stylus and webpack
 * that includes a .catch to catch errors on those two tasks - we dont
 * want that .catch in the full package task as we want errors to fall
 * through to the last .catch on that.
 */
function buildWebpackAndStylus() {
  return stylusBuild()
    .then(webpackBuild)
    .catch(err => { console.error(err) })
}

function stylusBuild() {
  console.log(chalk.blue('Running Stylus Build'))
  return exeq(`stylus ${stylusInput} -o ${stylusOutput}`)
    .catch(err => { console.error(err) })
}

function webpackBuild() {
  console.log(chalk.blue('Running Webpack Build'))
  return exeq(`cross-env NODE_ENV=production parallel-webpack`)
    .catch(err => { console.error(err) })
}

module.exports = {
  packageLinux64,
  buildWebpackAndStylus,
}
