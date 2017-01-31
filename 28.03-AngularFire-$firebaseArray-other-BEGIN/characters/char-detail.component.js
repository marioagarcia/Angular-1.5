(function(){

    angular.module('myApp')
        .component('charDetail', { // the tag for using this is <char-detail>
            templateUrl: "characters/char-detail.component.html",
            controller: charDetailController,
            bindings: {
                character: '<',
                onClose: '&'
            }
        });

    function charDetailController(characterService) {
        var self = this;

        self.character = characterService.selectedChar;
        self.close = close;

        function close() {
            self.onClose(); // call output binding
        }
    }

})();
