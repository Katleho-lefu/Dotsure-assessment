module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'prettier',
  ],
  plugins: [],
  // add your custom rules here
  rules: [
    {
      test: /\.scss$/,
      use: [
        'vue-style-loader',
        'css-loader',
        'sass-loader'
      ]
    }
  ]
}
