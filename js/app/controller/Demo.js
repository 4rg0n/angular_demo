demoApp.controller('DemoCtrl', function($scope) {
    
    $scope.info = "Wenn du das liest, bist du behindert!!";
       
    $scope.alertButton = "Gratis!";
    
    $scope.users = [
        {"name": "Du", alter: 20},
        {"name": "bist", alter: 21},    
        {"name": "behindert!", alter: 25}     
    ];
    
    //Alert 
    $scope.alert = function() {
        $scope.alertTitle = 'BEHINDERT!';
        $scope.alertText = 'Jetzt hast du die Bestätigung!';
        
        $scope.show = true;
    };
    
    $scope.toggled = true;
    
    //Toggle
    $scope.toggle = function() {
        $scope.toggled = !$scope.toggled;
    }
    
});