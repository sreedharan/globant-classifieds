app.config(['$translateProvider',
    function($translateProvider) {
        var language = (window.navigator.userLanguage || window.navigator.language).toLowerCase();
        console.log(language);
        $translateProvider.registerAvailableLanguageKeys(['en', 'sp'], {
            'en': 'en',
            'sp': 'sp'
        });

        $translateProvider.useStaticFilesLoader({
            prefix: 'js/languages/',
            suffix: '.json'
        });


        $translateProvider.preferredLanguage('en');
        // $translateProvider.use('de');

        $translateProvider.fallbackLanguage("sp");
    }
]);

app.controller('translateController', ['$scope', '$translate',
    function($scope, $translate) {
        $scope.listing = [
            { "name": "Housing", "color": "blue" },
            { "name": "Automotive", "color": "green" },
            { "name": "Furniture", "color": "orange" },
            { "name": "Electronics", "color": "black" },
            { "name": "Household", "color": "blue" },
            { "name": "Other", "color": "green" },
            { "name": "Housing", "color": "blue" },
            { "name": "Automotive", "color": "green" },
            { "name": "Furniture", "color": "orange" },
            { "name": "Electronics", "color": "black" },
            { "name": "Household", "color": "blue" },
            { "name": "Other", "color": "green" }
        ];

        $scope.switchLanguage = function(key) {
            $translate.use(key);
        };
    }
]);