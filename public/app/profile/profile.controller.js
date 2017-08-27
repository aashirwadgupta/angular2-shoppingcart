myApp.controller('ProfileCtrl', function($scope, $http, $rootScope, $localStorage) {
	
	$scope.init = function () {
		if(null==$localStorage.email){
			$scope.emailFlag = false;
		} else {
			$scope.emailFlag = true;
			var emailId = $localStorage.email;
			$http.get("http://localhost:8080/getProfile?email="+emailId).
			  then(function(response) {
				    console.log(response);
				    $scope.profile = response.data;
				  }, function(response) {
				    // called asynchronously if an error occurs
				    // or server returns response with an error status.
				  });
		}
	};
	
	$scope.getProfile = function(emailId){
		$scope.emailFlag = true;
		$localStorage.email = emailId;
		$http.get("http://localhost:8080/getProfile?email="+emailId).
		  then(function(response) {
			    console.log(response);
			  }, function(response) {
			    // called asynchronously if an error occurs
			    // or server returns response with an error status.
			  });
	}
	
	$scope.updateProfile = function(profileId){
		var profile = $scope.profileData;
		$http.put("http://localhost:8080/updateProfile", profile).
		  then(function(response) {
			    console.log(response);
			  }, function(response) {
			    // called asynchronously if an error occurs
			    // or server returns response with an error status.
			  });
	}
	
	$scope.createProfile = function(){
		var profileObj = $scope.profileData;
		$http.post("http://localhost:8080/createProfile", profileObj).
		  then(function(response) {
			    console.log(response);
			  }, function(response) {
			    // called asynchronously if an error occurs
			    // or server returns response with an error status.
			  });
	}
  $scope.message = 'Hello World! From Profile';  
});