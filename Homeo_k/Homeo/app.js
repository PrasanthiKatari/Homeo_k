var myapp = angular.module('myapp', ['ui.router','ui.grid']);

myapp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('AboutUs',{
            url: '/aboutus',
            templateUrl: 'aboutus.html'
        })
        .state('Login',{
            url: '/Login',
            templateUrl: 'Login.html'
        })
        .state('PhotoGallery',{
            url: '/PhotoGallery',
            templateUrl: 'PhotoGallery.html'
        })
        .state('ContactUs',{
            url: '/contactus',
            templateUrl: 'ContactUs.html'
        })
        .state('doctorpage', {
            url: '/doctorpage',
            templateUrl: 'doctormainpage.html'
        })
        .state('patienthistory',{
            url: '/patienthistory',
            templateUrl: 'patientdiseasehistory.html'
        });
}); // closes $routerApp.config()


// let's define the scotch controller that we call up in the about state
myapp.controller('myctrl',['$scope', '$http',function($scope,$http,$state) {
    refresh();
    $scope.gridOptions = {
        columnDefs:[
            {
                field: 'ParentType',
                displayName: 'ParentType'

            },
            {
                field: 'AddDescription',
                displayName: 'AddDescription',
                cellTemplate: '<div class="ui-grid-cell-contents"><a href="">Add Description</a></div>'

            },
            {
                field: 'Report',
                displayName: 'ViewReport',
                cellTemplate: '<div class="ui-grid-cell-contents"><a href="">ViewReport</a></div>'
            }

        ]
    };
    function refresh(){
       $http.get('data.json').success(function(data) {
         console.log(JSON.stringify(data));
                $scope.gridOptions.data = [
                    {
                        ParentType:"MySelf"
                    },
                    {
                        ParentType:"Father"
                    },
                    {
                        ParentType:"Mother"
                    },
                    {
                        ParentType:"Brother"
                    },
                    {
                        ParentType:"Sister"
                    },
                    {
                        ParentType:"Grandfather(Father's side)"
                    },
                    {
                        ParentType:"Grandmother(Father's side)"
                    },
                    {
                        ParentType:"Grandfather(Mother's side)"
                    },
                    {
                        ParentType:"Grandmother(Mother's side)"
                    },
                    {
                        ParentType:"Uncle(Father's Side)"
                    },
                    {
                        ParentType:"Aunt(Father's Side)"
                    },
                    {
                        ParentType:"Uncle(Mother's Side)"
                    },
                    {
                        ParentType:"Aunt(Mother's Side)"
                    }
]
       });
    }
    $scope.LogIN = function(user)
    {
        if(user.userid == 'xxx' && user.password == 'xxx')
        {
            $state.go('doctorpage');
        }
    };

}]);
