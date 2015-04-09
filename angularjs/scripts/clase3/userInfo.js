angular.module('ejemploDirective', [])
.controller('Controller', ['$scope', function($scope) {
  $scope.usuario = {
    nombre: 'Naomi',
    direccion: '1600 Amphitheatre',
    avatarUrl: "prof_pic.jpg"
  };
}])
.directive('userProfile', function() {
  return {
    template: '<div><div><img width="100" height="100" src="{{ usuario.avatarUrl }}"></div><div>{{ usuario.nombre}}</div><div>{{ usuario.direccion}}</div></div>'
  };
});