/**
 * DemoCtrl
 */
var DemoCtrl = demoApp.controller('DemoCtrl', function($scope) {
    
    $scope.info = "Wenn du das liest, bist du behindert!!";
       
    $scope.alertButton = "Gratis!";
    
    $scope.users = [
        {"name": "Du", alter: 20},
        {"name": "bist", alter: 21},    
        {"name": "behindert!", alter: 25}     
    ];
    
    /**
     * Alert
     */ 
    $scope.alert = function() {
        $scope.alertTitle = 'BEHINDERT!';
        $scope.alertText = 'Jetzt hast du die Bestätigung!';
        
        $scope.show = true;
    };
    
    
    /**
     * Toggle
     */
    $scope.toggled = true;
        
    $scope.toggle = function() {
        $scope.toggled = !$scope.toggled;
    }
    
    /**
     * Animate
     */
    $scope.animateItems = [];
    
    //Array mit Random Zahlen befüllen
    for (var i = 0; i <= 10; i++) {
        $scope.animateItems.push(Math.floor(Math.random()*1000000000));
    }
    
    //über CSS
    $scope.replaceItem = function() {
        $scope.animateItems.shift();
        $scope.animateItems.push(Math.floor(Math.random()*1000000000));
    };
    
});