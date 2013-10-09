demoApp.controller('DemoCtrl', function($scope) {
    
    $scope.info = "Wenn du das liest, bist du behindert!!";
    
    
    $scope.alertButton = "Gratis!";
    
    //Alert =D
    $scope.alert = function() {
        $scope.alertTitle = 'BEHINDERT!';
        $scope.alertText = 'Jetzt hast du die Bestätigung!';
        
        $('.alert').show();
    };
    
    
    
});