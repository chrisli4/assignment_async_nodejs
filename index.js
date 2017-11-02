var Emitter = require('./emitter');

var emitter = new Emitter();

var test = function () {
	console.log('hello world');
}

emitter.on('click', test);

emitter.on('click', function() {
	console.log('hello world 2');
});

emitter.showEvents();