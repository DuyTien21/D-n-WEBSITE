const { spawnSync, spawn, exec } = require('child_process')
const fs = require('fs')
const fse = require('fs-extra')
const path = require('path')

const main = async () => {
  const distPath = path.join(__dirname, '../dist')

  if (fs.existsSync(distPath)) fs.rmSync(distPath, { recursive: true })

  fs.mkdirSync(distPath)
  const files = new Set(fs.readdirSync(path.join(__dirname, '../')))
  files.delete('.git')
  files.delete('dist')
  files.delete('dev')
  files.delete('yarn.lock')
  files.delete('package.json')
  files.delete('node_modules')
  files.delete('.gitignore')
  files.delete('scss')

  await new Promise((resolve, reject) => {
    const onClose = (code) => {
      if (code === 0) return resolve()
      reject()
    }

    const process = exec('npx sass ./scss:./css', {
      stdio: ["pipe", "inherit", "inherit"]
    })

    process.on('close', onClose)
    process.on('exit', onClose)
    process.on('error', reject)
  })

  for (const file of files) {
    const targetPath = path.join(distPath, file)
    const srcPath = path.join(__dirname, '../', file)
    fse.copySync(srcPath, targetPath)
  }
}

main()