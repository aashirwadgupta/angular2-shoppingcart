myApp.controller('ProfileCtrl', function($scope, $http, $rootScope, $localStorage) {
		
	$scope.updateUser = function(){
	    console.log("Entered in update User Profile method");
	    var profile = {
	    		"id":$scope.mailId,
	    		"secretCode":$scope.secretCode,
	    		"mobileNumber":$scope.mobileNum,
	    		"dateOfBirth":$scope.dob,
	    		"profileImage":$scope.profileImage
	    }
		$http.post("http://localhost:8080/api/updateUserProfile", profile).
		then(function(response) {
		    console.log(response);
		    if(null!=response.data){
		    	$localStorage.email = response.data.id;
		    }
		  }, function(response) {
			    console.log(response);			  
		  });
	}
	
	$scope.getUserProfile = function(userId){
	    console.log("Entered in get User Profile method");
	    
		$http.get("http://localhost:8080/api/userProfile?id="+userId).
		then(function(response) {
		    console.log(response);
		    if(null!=response.data){
		    	$localStorage.email = response.data.id;
		    }
		  }, function(response) {
			    console.log(response);			  
		  });
	}
  $scope.message = 'Hello World! From Profile';  
});