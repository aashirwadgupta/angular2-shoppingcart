myApp.controller('ItemCtrl', function($scope, $http, $localStorage, $rootScope, NgTableParams) {
	
	$scope.init = function () {
	    console.log("Inside item controller ");
		$http.get("http://localhost:8080/getAllItems").
		  then(function(response) {
			    console.log("from get all items ");
			    $scope.items = response.data;
			    $scope.itemsTable = new NgTableParams({
			    	page: 1,
			    	count: 5
			    	}, {
			    	total: $scope.items.length,
			    	getData: function (params) {
			    		$scope.data = $scope.items.slice((params.page() - 1) * params.count(), params.page() * params.count());
			    	}
			    	});
			  }, function(response) {
			  });
	};
	
	$scope.searchAnItem = function(searchString){
		$http.get("http://localhost:8080/searchItem?text="+searchString).
		  then(function(response) {
			    console.log(response);
			  }, function(response) {
			    // called asynchronously if an error occurs
			    // or server returns response with an error status.
			  });
	}
	
	$scope.getItemDetails = function(item){
		$http.get("http://localhost:8080/getItemDetails?id="+item.id).
		  then(function(response) {
				$scope.itemDetail = item;
			  }, function(response) {
			    // called asynchronously if an error occurs
			    // or server returns response with an error status.
			  });
	}
	
	$scope.addItemToCart = function(item, quantity){
		var cartItem = {
				"addedOn": "2017-08-28",
				"item":item,
				"quantity":quantity
		}
		console.log(cartItem);
		if(null==$localStorage.email){
			$scope.emailFlag = false;
		} else {
			$scope.emailFlag = true;
			var emailId = $localStorage.email;
			$http.put("http://localhost:8080/addToCart?userId="+emailId, cartItem).
			then(function(response) {
			    console.log(response);
			  }, function(response) {
			    // called asynchronously if an error occurs
			    // or server returns response with an error status.
			  });
		}
	}
	
	$rootScope.checkEmail = function(emailId){
		$http.get("http://localhost:8080/getUser?userId="+emailId).
		then(function(response) {
		    console.log(response);
		  }, function(response) {
			  
		  });
	}
	
	$scope.updateItem = function(itemObj){
		$http.put("http://localhost:8080/updateItem", itemObj).
		then(function(response){
			console.log(response);
		}, function(response) {
			
		});
	}
	
	$scope.createItem = function(itemObj){
		$http.post("http://localhost:8080/createItem", itemObj).
		then(function(response){
			console.log(response);
		}, function(response) {
			
		});
	}
  $scope.message = 'Hello World! From item';  
});