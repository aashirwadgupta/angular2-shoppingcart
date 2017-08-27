myApp.controller('ItemDetailCtrl', function($scope, $state, $stateParams){

	console.log($stateParams);
	$scope.getItemDetails = function(){
		/*$http.get("http://localhost:8080/getItemDetails?id="+itemId).
		  then(function(response) {
			    console.log(response);
				$scope.itemDetail = response.data;
			  }, function(response) {
			    // called asynchronously if an error occurs
			    // or server returns response with an error status.
			  });
*/	}
});