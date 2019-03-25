let app = {

    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
        // app.receivedEvent('deviceready');
        let dollar = document.getElementById("dollar");
        let pond = document.getElementById("pond");
        let yen = document.getElementById("yen");
        let b = document.getElementById('button').addEventListener("click", function(){
            let a = document.getElementById('input').value;
            yen.innerHTML = a * 125.6208;
            dollar.innerHTML = a * 1.1357;
            pond.innerHTML  = a * 1.1661;

        });

    },
    receivedEvent: function(id) {
        let parentElement = document.getElementById(id);
        let listeningElement = parentElement.querySelector('.listening');
        let receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
