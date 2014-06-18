// THIS IS A CONTROLLER WHERE I AM LOADING DATA FROM STATIC HARD CODED DATA ONLY
var medicalApp = angular.module('medicalApp', []);

medicalApp.controller('DoctorListCtrl', function($scope, $http){
	$http.get('medical.json').success(function(data){
		$scope.medicaldata = data;
	})
	
	// code for years
//	$scope.years = [
//	  {year:"2014"},
//	   {year:"2013"},
//	   {year:"2012"}		
//	]
//    $scope.years = $scope.medicaldata.year;
//	$scope.selectedYear = $scope.years[0];
	$scope.yearChange = function($event){
        
    }	
	
	// code for appointment dates
	$scope.apptDates = [
	     {apptDate:"1/1/2014"},
	     {apptDate:"3/12/2014"},
	     {apptDate:"4/28/2014"}		
	]
	$scope.selectedDate = $scope.apptDates[0];
	$scope.apptDateChange = function($event){
        
    }	
		
	
	// code for doctor names
	$scope.doctornames = [
	   {name:"Dr.Smith", id:1},
	   {name:"Dr.Anna", id:2},
	   {name:"Dr.Suze", id:3}	
	]	
	$scope.selectedDoctor = $scope.doctornames[0];	
	
	$scope.doctorNameChange = function($event){
        
    }
	
	// code for illnesses
	$scope.illnesses = [
	   {illness:"Cold"},
	   {illness:"Flu"},
	   {illness:"Diarrhea"}	
	]	
	$scope.selectedIllness = $scope.illnesses[0];	
	
	$scope.illnessChange = function($event){
        
    }
	
	
	
	
	
})



