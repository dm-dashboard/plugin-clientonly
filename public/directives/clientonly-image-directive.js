(function(){
    'use strict';

    angular.module('mean.edp-clientonly')
        .directive('clientonlyImage', function($sce){
            var link = function($scope, element, attrs){
                var config = JSON.parse(attrs.dashboardConfig);

                var url = decodeURIComponent(config.url);
                
                $scope.image = {
                    url : $sce.trustAsResourceUrl(url),
                }
                
                if (config.stretchBoth) {
                    $scope.image.stretchClass = 'clientonly-image-stretch';
                } else if (config.stretchWidth){
                    $scope.image.stretchClass = 'clientonly-image-width';
                } else if (config.stretchHeight){
                    $scope.image.stretchClass = 'clientonly-image-height';
                }else {
                    $scope.image.stretchClass = 'clientonly-image';
                }
            };

            return {
                restrict : 'A',
                link : link,
                templateUrl : '/edp-clientonly/views/clientonly-image-directive.html',
                scope : true
            };
        });
})();
