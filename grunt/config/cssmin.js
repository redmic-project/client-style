module.exports = function(grunt) {

	var path = require('path'),
		distPath = grunt.config('redmicConfig.distPath'),
		inputFile = 'style.css',
		outputFile = path.join(distPath, inputFile),
		font1File = path.join(distPath, 'OpenSans.css'),
		font2File = path.join(distPath, 'Exo2.css'),
		filesConfig = {};

	filesConfig[outputFile] = [font1File, font2File, inputFile];

	grunt.config('cssmin', {
		target: {
			files: filesConfig
		}
	});
};
