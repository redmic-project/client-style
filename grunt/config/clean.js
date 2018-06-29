module.exports = function(grunt) {

	var path = require('path'),
		distPath = grunt.config('redmicConfig.distPath'),
		cssFile = 'style.css',
		cssMinFile = path.join(distPath, cssFile),
		distCssFiles = path.join(distPath, '*.css');

	grunt.config('clean', {
		build: [distPath, cssFile],
		release: [distCssFiles, '!' + cssMinFile]
	});
};
