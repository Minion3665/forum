const webpack = require('webpack');
const webpackconfig = require('./webpack.config.js');
const fs = require('fs');

let compiler = webpack(webpackconfig);

let deleteFolderRecursive = (path) => {
	if (fs.existsSync(path)) {
		var readDir = fs.readdirSync(path);
		for (var id in readDir) {
			var curPath = path + "/" + readDir[id];
			if (fs.lstatSync(curPath).isDirectory()) { // recurse
				deleteFolderRecursive(curPath);
			} else { // delete file
				fs.unlinkSync(curPath);
			}
		}
		fs.rmdirSync(path);
	}
};

console.log("Beginning webpack build\n")
compiler.run((err, stats) => {
	if (stats.compilation.errors[0]) {
		console.log("Webpack build failed\n");
		console.log(stats.compilation.errors[0]);
		process.exit(1);
	} else {
		console.log("Deleting node_modules")
		deleteFolderRecursive("./node_modules");
		// deleteFolderRecursive("./client"); // Delete client, disabled so we can see the code included in the build
		console.log("Build finished, ready to deploy...");
	}
});
