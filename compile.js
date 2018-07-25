const allSchemas = require('./lib')
const url = require('url')
const fs = require('fs')
const path = require('path')

function iterate (obj) {
  for (var property in obj) {
    if (obj.hasOwnProperty(property)) {
      if (typeof obj[property] === 'object') {
        iterate(obj[property])
      } else {
        if (property === '$id') compileObject(obj[property], obj)
      }
    }
  }
}

function compileObject (prop, object) {
  const parsedUrl = url.parse(prop)
  const pathname = path.parse(parsedUrl.pathname)
  const targetDir = `dist${pathname.dir}`
  maybeMkdir(targetDir)

  fs.writeFileSync(path.resolve(__dirname, targetDir, pathname.base), JSON.stringify(object, null, 2) + '\n')
}

function maybeMkdir (pathString) {
  try {
    fs.mkdirSync(path.resolve(__dirname, pathString))
  } catch (err) {}
}

module.exports = (schemas) => {
  maybeMkdir('dist')
  iterate(allSchemas)
}

module.exports(allSchemas)
