'use strict';

angular.module('hptApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
