(function () {
	angular.module('myApp').component('charNew', {
		controller: CharNew,
		templateUrl: "characters/char-new.template.html",
		controllerAs: "vm"
	});

	function CharNew(characterService) {
		var vm = this;

		vm.newCharacter = {};

		vm.saveNewChar = function () {
			characterService.addNewChar(vm.newCharacter);
		}
	}

})();
