myApp.controller('AppCtrl', function($scope, $http, $rootScope, $localStorage) {
  $scope.message = 'Hello World!';  
	
	$rootScope.checkEmail = function(emailId){
	    console.log("Entered in root scope function");
		console.log(emailId);
		$http.get("http://localhost:8080/user/getUser?userId="+emailId).
		then(function(response) {
		    console.log(response);
		    if(null!=response.data){
		    	$localStorage.email = response.data.id;
		    }
		  }, function(response) {
			    console.log(response);			  
		  });
	}
});