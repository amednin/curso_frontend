angular.module('formulario', [])
  .controller('EstudianteController', ['$scope', 'formService', function($scope, formService) {
    $scope.nombre = "";
    $scope.apellido = "";
    $scope.edad = "";
    $scope.ci = "";
    $scope.estudiantes = [];

    $scope.agregarALista = function () {
      var nuevoEst = formService.agregarNuevoEst($scope.nombre, $scope.apellido, $scope.edad, $scope.ci);
      $scope.estudiantes.push(nuevoEst);
      formService.clearEstudiante();
    };
  }])
  .factory('formService', function () {
    var estudiante = [];

    var agregarNuevoEst = function (nom, ape, edad, ci) {

      estudiante.push(nom);
        estudiante.push(ape);
        estudiante.push(edad);
        estudiante.push(ci);
      return estudiante;
    }

    var clearEstudiante = function () {
      estudiante = [];
    }

    return {
      agregarNuevoEst: agregarNuevoEst,
      clearEstudiante: clearEstudiante
    };
});