myApp.controller('CartCtrl', function($scope, $http, $rootScope, $localStorage) {
	
	$scope.init = function () {
		if(null==$localStorage.email){
			$scope.emailFlag = false;
		} else {
			$scope.emailFlag = true;
			var emailId = $localStorage.email;
			$http.get("http://localhost:8080/getCart?userId="+emailId).
			  then(function(response) {
				    console.log(response);
				    $scope.cart = response.data;
				  }, function(response) {
				  });
		}
	};
	$scope.seeMyCart = function(){
		var emailId =$localStorage.email;
		if(null!=$localStorage.email){
			$rootScope.emailFlag=true;
			$http.get("http://localhost:8080/getCart?userId="+emailId).
			  then(function(response) {
				    console.log(response);
				  }, function(response) {
				  });
		}
	}
	$scope.addItemToCart = function(item, quantity){
		if(null==$localStorage.email){
			$scope.emailFlag = false;
		} else {
			$scope.emailFlag = true;
			var emailId = $localStorage.email;
			$http.get("http://localhost:8080/addToCart?userId="+itemId).
			then(function(response) {
			    console.log(response);
			  }, function(response) {
			    // called asynchronously if an error occurs
			    // or server returns response with an error status.
			  });
		}
	}
	
	$scope.getItemDetails = function(searchString){
		$http.get("http://localhost:8080/searchItem?text="+searchString).
		  then(function(response) {
			    console.log(response);
			  }, function(response) {
			    // called asynchronously if an error occurs
			    // or server returns response with an error status.
			  });
	}
  $scope.message = 'Hello World! From item';  
});