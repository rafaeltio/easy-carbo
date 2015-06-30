function uib_w_58_popup_controller($scope, $ionicPopup) {

  // A confirm dialog
  $scope.show = function() {
    var confirmPopup = $ionicPopup.alert({
      title: 'Login',
      template: 'Usuário logado com sucesso'
    });
    confirmPopup.then(function(res) {
        activate_subpage("#uib_page_refeicao"); 
    });
  };

};