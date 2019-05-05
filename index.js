const postCSSInlineComment = () => config => {
  const rules = config.module.rules.find(rule => Array.isArray(rule.oneOf))
    .oneOf

  rules.forEach(r => r.use && r.use.forEach(
    u => {
      if (u.options && u.options.ident === 'postcss') {
        u.options.parser = 'postcss-scss'
      }
    }
  ))

  return config
}

module.exports = postCSSInlineComment