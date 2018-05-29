module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: '8',
        },
        loose: true,
      },
    ],
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
  ],
}
