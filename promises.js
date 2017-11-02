//1.
/*
var p = Promise.resolve('Hello World!');
p.then(function(message) {
	setTimeout(function() {
		console.log(message);
	}, 1000);
});


//2.

function delay(msecs) {
	return new Promise(function(resolve){
		setTimeout(function(){
			resolve(msecs);
		}, msecs)
	})
};

function countDown(msecs) {
	if(msecs > 0) {
		console.log(msecs);
		return delay(msecs - 100);
	} else {
		console.log('Done!');
	}
}

delay(1000)
	.then(countDown)
	.then(countDown)
	.then(countDown)
	.then(countDown)
	.then(countDown)
	.then(countDown)
	.then(countDown)
	.then(countDown)
	.then(countDown)
	.then(countDown)
	.then(countDown);

//3.

function squared(number) {
	return new Promise(function(resolve, reject) {
		if(typeof number === 'number') {
			resolve(number * number);
		} else {
			reject('not a number');
		}
	});
};


squared('asdf').then(function(value) {
	console.log(value);
}).catch(function(err) {
	console.log(err);
});

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var promiseArr = arr.map(squared);

Promise.all(promiseArr)
	.then(function(results) {
		console.log(results);
	})

//4.

function doBadThing(forRealz) {
	return new Promise(function(resolve, reject) {
		if(!forRealz) {
			resolve('Yay!');
		} else {
			reject('Nay!');
		}
	})
}

doBadThing(false)
	.then(function(value) {
		console.log(value);
	}, function(err) {
		console.log(err);
	});
*/

//File Operations





