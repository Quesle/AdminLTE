define(['app'], function (app) {
  app.controller('AuthLoginController', ['$state', '$cookieStore', 'config', function($state, $cookieStore, config) {

    var self = this;
    self.data = {};
    self.login = function() {
      var token = $cookieStore.put('access_token', 'AKLJFLAJFOIASJDJASPOJAFJASFASF');
      $state.go('main.dashboard.v1');
    }
  }]);
});
