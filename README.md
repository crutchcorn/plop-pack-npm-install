# Plop Pack Npm Install

[![npm](https://img.shields.io/npm/v/plop-pack-npm-install.svg)](https://www.npmjs.com/package/plop-pack-npm-install)

Useful to have action for [PlopJS](https://github.com/plopjs/plop). This action runs `npm install` on the respective path passed to it.

## Installation

```
npm i plop-pack-npm-install
```

## Example

```javascript
module.exports = function(plop) {
  // Loads the npmInstall action type
  plop.load('plop-pack-npm-install');

  plop.setGenerator('generate', {
    prompts: [
        // ...
    ],
    actions: function(data) {
      const actions = [];

      actions.push({
        type: 'npmInstall',
        path: `${process.cwd()}/project-name/`,
        // By default is false, but if "true" will log the output of commands
        verbose: true
      })
    }
  })
}
```
