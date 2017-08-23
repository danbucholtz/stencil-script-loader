exports.config = {
  bundles: [
    { components: ['db-script-loader'] },
    { components: ['db-parent-component'] }
  ],
  collections: [
    { name: '@stencil/router' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
