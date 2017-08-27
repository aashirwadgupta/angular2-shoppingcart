myApp.controller('OrderCtrl', function($scope, $http, $rootScope, $localStorage) {
	$scope.init = function () {
		if(null==$localStorage.email){
			$scope.emailFlag = false;
		} else {
			$scope.emailFlag = true;
			var emailId = $localStorage.email;
			$http.get("http://localhost:8080/getMyOrders?userId="+emailId).
			  then(function(response) {
				    console.log(response);
				    $scope.orders = response.data;
				  }, function(response) {
				    // called asynchronously if an error occurs
				    // or server returns response with an error status.
				  });
		}
	};
	
	$scope.getItemDetails = function(itemId){
		$http.get("http://localhost:8080/getItemDetails?id="+itemId).
		  then(function(response) {
			    console.log(response);
			  }, function(response) {
			    // called asynchronously if an error occurs
			    // or server returns response with an error status.
			  });
	}
	
	
  $scope.message = 'Hello World! From item';  
});