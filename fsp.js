var fs = require('fs');

var fsp = {
	readFile: function(filePath) {
		return new Promise((resolve, reject) => {
			fs.readFile(filePath, 'utf8', (err, data) => {
				if(err) 
					reject(err);
				else {
					resolve(data);
				}
			});
		});
	},

	writeFile: function(filePath, content) {
		return new Promise((resolve, reject) => {
			fs.writeFile(filePath, content, (err) => {
				if(err)
					reject(err);
				else {
					resolve(content);
				}
			});
		});
	},

	appendFile: function(filePath, content) {
		return new Promise((resolve, reject) => {
			fs.appendFile(filePath, content, (err) => {
				if(err)
					reject(err);
				else {
					resolve(content);
				}

			})
		})
	}
}

fsp.appendFile('./data/test.txt', 'Hello World!')
	.then(function(res) {
		console.log(res);
	})
	.catch(function(err) {
		console.log(err)
	});