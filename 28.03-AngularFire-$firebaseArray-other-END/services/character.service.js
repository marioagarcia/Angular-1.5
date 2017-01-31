(function () {

	angular.module('myApp')
		.service('characterService', characterService);

	function characterService($firebaseArray) {
		var self = this;
		self.selectedChar = undefined;
		self.characters = getCharacterList();
		self.getRandomCharacter = getRandomCharacter;
		self.addNewChar = addNewChar;

		function getRandomCharacter() {
			return self.characters[Math.floor(Math.random() * self.characters.length)];
		}

		function init() {
			for (var c = 0, clen = self.characters.length; c < clen; c++) {
				self.characters[c].weight = self.characters[c].mass * 2.20462;
			}
			self.selectedChar = getRandomCharacter();
		}

		function getFirebaseInstance () {
			return firebase.database().ref();
		}

		function getCharacterList() {
			return $firebaseArray(getFirebaseInstance().child('characters'));
		}

		function addNewChar(newCharacter) {
			self.characters.$add(newCharacter)
				.then(function (data) {
					console.log('data after $add: ');
					console.log(data);
				});
		}

		init();
	}

})();
