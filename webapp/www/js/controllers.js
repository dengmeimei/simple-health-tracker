angular.module('starter.controllers', [])

.controller('DailyCtrl', function($scope) {
  $scope.today = getDateString();
})

.controller('WheneverCtrl', function($scope) {
})

.controller('ReflectCtrl', function($scope, Entries) {
  $scope.entries = Entries.all();
})

.controller('EntryDetailCtrl', function($scope, $stateParams, Entries) {
  $scope.friend = Entries.get($stateParams.entryId);
})

.controller('AccountCtrl', function($scope) {
});
