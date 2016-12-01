app.config(['$translateProvider',
    function($translateProvider) {
        var language = (window.navigator.userLanguage || window.navigator.language).toLowerCase();

        $translateProvider.registerAvailableLanguageKeys(['en', 'sp'], {
            'en': 'en',
            'sp': 'sp'
        });

        $translateProvider.useStaticFilesLoader({
            prefix: 'js/json/',
            suffix: '.json'
        });


        $translateProvider.preferredLanguage('en');
        $translateProvider.fallbackLanguage("sp");
    }
]);

app.controller('translateController', ['$scope', '$translate',
    function($scope, $translate) {
        $scope.switchLanguage = function(key) {
            $translate.use(key);
        };
    }
]);