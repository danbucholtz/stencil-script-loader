exports.config = {
  bundles: [
    { components: ['db-script-loader'] },
    { components: ['db-parent-component'] },
    { components: ['db-lodash-component'] }
  ],
  collections: [
    { name: '@stencil/router' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
