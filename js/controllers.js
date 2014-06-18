var medicalApp = angular.module('medicalApp', ['ui']);

medicalApp.controller('DoctorListCtrl', function($scope, $http){
	$http.get('medical.json').success(function(data){
		$scope.medicaldata = data;
	})
	
	$scope.selectedYearDate = function(input){
		if (!$scope.selectedYear) 
			return;
		var dt = _.filter($scope.medicaldata, function(item){
			return item.year == $scope.selectedYear.year;
		}), res = [];
		
		// go thru all elements of array dt.apptdate
		// and check against input.apptdate
		for (var i = 0, len = dt.length; i < len; i++) {
			if (input.apptdate == dt[i].apptdate)			
			return true;
		}
		
	}
		
	$('.showdetailbtn').click(function(){	   	
		var selectedItem = _.filter($scope.medicaldata, function(item){
			return item.apptdate == $scope.selectedDate.apptdate;
		});
		if (selectedItem){
			$('.doctor-name').html($(selectedItem).prop('doctor'));
			$('.illness-name').html($(selectedItem).prop('illness'));
			$('.visit-details-text').html($(selectedItem).prop('details'));
			$('.medical-info-detail-container').show();
		}
	})
})



