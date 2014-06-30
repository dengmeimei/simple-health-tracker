angular.module('starter.controllers', [])

.controller('DailyCtrl', function($scope) {
  refreshCts();
})

.controller('WheneverCtrl', function($scope) {
  $scope.today = getDateString();
  $scope.theTime =getTimeString();
})

.controller('ReflectCtrl', function($scope, Entries) {
  // $scope.entries = Entries.all();
  refreshCts();
})

.controller('EntryDetailCtrl', function($scope, $stateParams, Entries) {
  $scope.friend = Entries.get($stateParams.entryId);
})

.controller('AccountCtrl', function($scope, $ionicModal, $ionicLoading) {

});
  