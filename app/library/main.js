
require.config({
  baseUrl: '',
  paths:{
    'angular-package': 'dist/lib/lib.angular.min',
    // 'domReady': '../bower_components/domReady/domReady',
    'simplex-markdown': 'simplex/markdown',
    'simplex-ui-codemirror': 'simplex/ui-codemirror',

    'framework': 'dist/lib/framework.min'
  },
  shim: {
    'angular-package': {exports: 'angular'}
  },
  deps: ['bootstrap']
});
