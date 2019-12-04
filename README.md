# react-app-rewire-postcss-inline-comment
This config will let you use inline comment syntax(like js) for PostCSS in a rewired react project

## Motivation
Sometimes I want to add single line comment in a CSS file, but using double slash by mistake, then much time spent.
Thus, Why not enabling it? 

## Environment
create-react-app v2.0+, react-app-rewired v2, customize-cra 

## Installation
```sh
yarn add -D react-app-rewire-postcss-inline-comment

# If you don't already, you also need:
yarn add -D react-app-rewired
yarn add -D customize-cra
```

## Usage
In the `config-overrides.js` of the root of your project you created for `react-app-rewired` add this code:

```js
const rewireInlineComment = require('react-app-rewire-postcss-inline-comment')
const { override } = require('customize-cra')

module.exports = override(
  // ...other rewires
  rewireInlineComment()
)
```
### e.g.

```scss
body {
  /* this comment will remain */
  font-size: 18px;
  // this comment will also remain
  color: blue;
}
```

## License
MIT

