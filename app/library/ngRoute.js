define('ngRoute', ['app'], function (app) {
  var templatePath = 'container/ngTemplate.html';
  var dashboardTemplatePath = 'container/dashboard/'
  var dashboardUiSref = 'main.dashboard.';

  var dashboardRouter = [
    {
      title: 'Dashboard Index',
      name: 'index',
      uiSref: dashboardUiSref + 'index',
      templateUrl: dashboardTemplatePath + 'index.html',
      controller: 'DashboardIndexController',
      controllerUrl: dashboardTemplatePath + 'controller.js'
    }
  ];


  var routes = [
    dashboardRouter
  ];
  var states = [{
    url: 'dashboard',
    title: 'Dashboard',
    templateUrl: templatePath
  }];

  app.config(['generateProvider', function(generateProvider) {
    angular.forEach(states, function(state) {
      generateProvider.state(state);
    });
    angular.forEach(routes, function(subRoutes) {
      angular.forEach(subRoutes, function(route) {
        generateProvider.router(route);
      });
    });
  }]);
});
