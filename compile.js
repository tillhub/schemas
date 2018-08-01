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
function walk (dir, done) {
  var results = []
  fs.readdir(dir, function (err, list) {
    if (err) return done(err)
    var pending = list.length
    if (!pending) return done(null, results)
    list.forEach(function (file) {
      file = path.resolve(dir, file)
      fs.stat(file, function (err, stat) {
        if (err) return done(err)
        if (stat && stat.isDirectory()) {
          walk(file, function (err, res) {
            if (err) return done(err)
            results = results.concat(res)
            if (!--pending) done(null, results)
          })
        } else {
          results.push(file.replace(dir, ''))
          if (!--pending) done(null, results)
        }
      })
    })
  })
};

module.exports = (schemas) => {
  maybeMkdir('dist')
  iterate(allSchemas)

  walk(path.resolve(__dirname, 'dist'), (err, result) => {
    if (err) throw err
    fs.writeFileSync(path.resolve(__dirname, 'dist/index.json'), JSON.stringify(result, null, 2) + '\n')
  })
}

module.exports(allSchemas)
