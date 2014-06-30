angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Entries', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var entries = [
    { id: 0, name: 'Weight' },
    { id: 1, name: 'Wellness' },
    { id: 2, name: 'Food' }
  ];

  return {
    all: function() {
      return entries;
    },
    get: function(entryId) {
      return {
        name: "Graph Data"
      }
    }
  }
});

function refreshCts() {
  CTS.status.libraryLoaded.then(function() {
    CTS.engine.status.booted.then(function() {
      CTS.engine.forrest.reloadTreeSpec('body', true);
    });
  });
}

function getDateString() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();

  if(dd<10) {
      dd='0'+dd
  }

  if(mm<10) {
      mm='0'+mm
  }

  var today = yyyy + "-" + mm + "-" + dd;
  return today;
}

function getTimeString() {
  var today = new Date();
  var dd = today.getHours();
  var mm = today.getMinutes();
  return dd + ":" + mm;
}
