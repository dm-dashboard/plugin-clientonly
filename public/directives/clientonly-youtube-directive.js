(function(){
    'use strict';

    angular.module('mean.edp-clientonly')
        .directive('clientonlyYoutube', function(youtubeEmbedUtils){
            var link = function($scope, element, attrs){
                var config = JSON.parse(attrs.dashboardConfig);

                $scope.playerVars = {
                    controls: 0,
                    autoplay: config.autoplay === false ? 0 : 1
                };

                $scope.embeddedVideoId = config.videoId;
                if (!$scope.embeddedVideoId){
                    $scope.embeddedVideoId = youtubeEmbedUtils.getIdFromURL(config.videoUrl);
                }

                if (config.loop) {
                    $scope.$on('youtube.player.ended', function ($event, player) {
                        // play it again
                        player.playVideo();
                    });
                }
            };

            return {
                restrict : 'A',
                link : link,
                templateUrl : '/edp-clientonly/views/clientonly-youtube-directive.html'
            };
        });
})();
