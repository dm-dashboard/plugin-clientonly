(function(){
    'use strict';

    angular.module('mean.edp-clientonly')
        .directive('clientonlyIframe', function($sce){
            var link = function($scope, element, attrs){
                var url = decodeURIComponent(JSON.parse(attrs.dashboardConfig).url);
                $scope.url = $sce.trustAsResourceUrl(url);
            };

            return {
                restrict : 'A',
                link : link,
                templateUrl : '/edp-clientonly/views/clientonly-iframe-directive.html'
            };
        });
})();
