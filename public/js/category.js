var app = angular.module('myapp',[]);
app.controller("myctrl",function ($scope,$http) {
	$http({
		method:"post",
		url:"adminWebService",

	})
});