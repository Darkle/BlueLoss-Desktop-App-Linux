// @ts-nocheck
const path = require('path')

const { exec: execPkg } = require('pkg')
const exeq = require('exeq')
const chalk = require('chalk')
const del = require('del')
const Zip = require('node-7z')
const fs = require('fs-extra')

const basePath = path.resolve(__dirname, '..')
const inputJSfile = path.join(basePath, 'app', 'appMain-compiled.js')
const buildFolder = path.join(basePath, 'build')
const zipFolder = path.join(buildFolder, 'zip')
const pkgOutputFolder = path.join(buildFolder, 'BlueLoss')
const pkgBuildFile = path.join(pkgOutputFolder, 'BlueLoss')
const appIconSrc = path.join(basePath, 'resources', 'icons', 'Blue', 'BlueLoss-blue-512x512.png')
const appIconOutput = path.join(pkgOutputFolder, 'BlueLoss.png')
const desktopFilePath = path.join(pkgOutputFolder, 'BlueLoss.desktop')
const foldersToClean = [path.join(buildFolder, '**', '*.*'), path.join(buildFolder, '**'), `!${buildFolder }`]
const archive7zip = new Zip()
const pkgParams = [
  '--config',
  'package.json',
  inputJSfile,
  '--target',
  'node8-linux-x64',
  '--output',
  pkgBuildFile
]
const desktopFileData = `
[Desktop Entry]
Type=Application
Version=1.0
Name=BlueLoss
Exec=BlueLoss
Icon=BlueLoss.png
StartupNotify=false
Terminal=false
Categories=Utility;
`.trim()

function packageLinux64() {
  return prepareForPackaging()
    .then(runPkg)
    .then(copyAppIcon)
    .then(createDesktopFile)
    .then(createZipVersion)
    // .then(createSnap)
    // .then(createAppImage)
    .then(() => {
      console.log(chalk.green('Successfully Packaged App!'))
    })
    .catch(err => {
      console.error(chalk.red(`There was an error packaging`), err)
    })
}

function prepareForPackaging(){
  return webpackBuild()
    .then(() => {
      console.log(chalk.blue(`Cleaning: ${prettyGlobs(foldersToClean) }`))
      return del(foldersToClean, { glob: true })
    })
}

function runPkg(){
  console.log(chalk.blue(`Running Pkg`))
  return execPkg(pkgParams)
}

function createZipVersion() {
  console.log(chalk.blue(`Creating Zip Version`))
  return archive7zip.add(
    path.join(zipFolder, `BlueLoss-Linux-x86_64.7z`),
    path.join(buildFolder, 'BlueLoss')
  )
}

// function createSnap() { } // make sure that it sets the right .desktop stuff

// function createAppImage(){} // make sure that it sets the right .desktop stuff


function webpackBuild() {
  console.log(chalk.blue('Running Webpack Build'))
  return exeq(`cross-env NODE_ENV=production parallel-webpack`)
}

function copyAppIcon(){
  console.log(chalk.blue(`Copying App Icon`))
  return fs.copy(appIconSrc, appIconOutput)
}

function createDesktopFile(){
  fs.outputFile(desktopFilePath, desktopFileData)

}

// function generateDesktopFileData(containerType){
//   if(containerType === 'zip'){
//     return
//   }
// }

function prettyGlobs(globArr){
  return globArr.reduce((str, nextItem) =>
    `${str}\n${nextItem}`
  , '')
}

module.exports = {
  packageLinux64,
  webpackBuild,
}
