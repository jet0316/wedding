var master = angular.module('master', []);

master.controller('main', function($scope, $http, $rootScope){
	$scope.clickAudio = function(data){
		data.showAudio = !data.showAudio
	}


	$scope.list = [
		{
			name: 'Band',
			audio: 'audiofile'
		},
		{
			name: 'other band',
			audio: 'more audio'
		}
	]
});