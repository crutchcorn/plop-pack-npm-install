# Plop Pack Npm Install

[![npm](https://img.shields.io/npm/v/plop-pack-npm-install.svg)](https://www.npmjs.com/package/plop-pack-npm-install)

Useful to have action for [PlopJS](https://github.com/plopjs/plop). This action runs `npm install` on the respective path passed to it.

## Example

```javascript
const {npmInstall} = require('plop-actions');

module.exports = function(plop) {
  plop.setActionType('npmInstall', gitInit);

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
