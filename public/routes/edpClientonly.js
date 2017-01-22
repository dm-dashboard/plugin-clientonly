'use strict';

angular.module('mean.edp-clientonly').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider.state('edpClientonly admin', {
            url: '/edpClientonly/admin',
            templateUrl: 'edp-Clientonly/views/admin.html'
        });
    }
]);
