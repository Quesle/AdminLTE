define(['app'], function (app) {
  app.controller('AuthLoginController', ['$state', 'appCookie', function($state, appCookie) {

    var self = this;
    self.data = {};
    self.login = function() {
      console.log(self.data);
      appCookie.token = 'my token';
      $state.go('main.dashboard.v1');
    }
  }]);
});
