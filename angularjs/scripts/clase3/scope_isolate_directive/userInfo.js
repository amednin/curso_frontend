angular.module('ejemploDirective', [])
.controller('Controller2', ['$scope', function($scope) {
  $scope.naomi = {
    nombre: 'Naomi',
    direccion: '1600 Amphitheatre',
    avatarUrl: "prof_pic.jpg"
  };
  $scope.sara = {
    nombre: 'Sara',
    direccion: '1600 WWWW',
    avatarUrl: "https://www-techinasia.netdna-ssl.com/wp-content/uploads/2009/11/facebook-avatar.png?1cb6c9"
  };
}])
.directive('userPic', function() {
  return {
    scope: {
        userInfo: '=info'
    },
    templateUrl: 'u-profile.html'
  };
});
