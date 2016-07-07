
var myyapp = angular.module('myyapp',['angularjs-dropdown-multiselect']);
myyapp.controller('myycontroller', function($scope) {
    $scope.example9model = [];
    $scope.example9data = [
        {id: 1, label: "Fever"},
        {id: 2, label: "cold"},
        {id: 3, label: "cough"},
        {id: 4, label: "thyroid"},
        {id: 5, label: "malaria"},
        {id: 6, label: "typhoid"},
        {id: 7, label: "sugar"},
        {id: 8, label: "tuberculosis"}
    ];
    $scope.example9settings = {
        enableSearch: true,
        scrollableHeight: '300px',
        scrollable: true
    };


});

