
# ZTM Node.js Developer Course

This repo is created to Track and save my Node.js Developer course


## Modules and Caching

Modules are cached. So when required multiple times, it takes from the first time it was imported.

it can be checked in console.log(require.cache)

You cant edit required modules. Overriding the same functions as the required module.

## Using index,js

You can't just import a folder full of modules. 

To do so, use index.js in the folder. It is a special file which exports all the modules in the folder. When you point the path to the folder, it resolves to index.js of the folder.

We dont have to use index.js. Keeping it simple is better, else it makes complicated module loading system.

## Semantic versioning

major.minor.patch

major => incompatible api updates and not backward compatible
minor => small changes and performance improvements
patch => fixing security issues and vulnarabilities

npm audit => will show all issues
npm audit fix=>  will update packages to the stable version without vulnaribilities

## Package.json
Entire info of project, dependencies
Package-lock.json => COmplete expanded info of project, packages, dependency tree info requried for platform to install and run the program