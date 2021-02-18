(
  function()
  {
    'use strict';

    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope)
    {
      $scope.checkIfTooMuch = function()
      {
        if($scope.lunchMenu == null)
        {
          $scope.output = "Please enter data first";
        }
        else
        {
            var lunchItems = ($scope.lunchMenu).split(',');
            if(lunchItems.length == 0)
            {
              $scope.output = "Please enter data first";
            }
            if(lunchItems.length <= 3)
            {
                $scope.output = "Enjoy!";
            }
            else
            {
              $scope.output = "Too Much!";
            }

        }
      }
    }

  }
)();
