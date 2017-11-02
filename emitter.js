function Emitter() {

	this.events = {};

	this.on = function(eventType, callback) {
		if(this.events[eventType] === undefined) {
			this.events[eventType] = [callback];
		} else {
			this.events[eventType].push(callback);
		}
	}

	this.emit = function(eventType) {
		for(var i = 0; i < this.events[eventType].length; i++) {
			this.events[eventType][i]();
		}
	}

	this.removeListener = function(eventType, callback) {
		for(var key in this.events) {
			if(key === eventType) {
				for(var i = 0; i < this.events[key].length; i++) {
					if(this.events[key][i].name === callback) {
						this.events[key].splice(i, 1);
					}
				}
			}
		}
	}

	this.removeAllListener = function(eventType) {
		this.events[eventType] = undefined;
	}

	this.showEvents = function() {
		console.log(this.events);
	}
}

module.exports = Emitter;