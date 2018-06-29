module.exports = function(grunt) {

	var srcPath = grunt.config('redmicConfig.srcPath'),
		distPath = grunt.config('redmicConfig.distPath'),
		outputFile = 'style.css',
		inputFile = 'style.styl',

		optionsConfig = {
			paths: [srcPath, distPath],
			use: [
				require('nib')
			],
			'include css': true,
			'resolve url': true,
			compress: true
		},
		filesConfig = {};

	filesConfig[outputFile] = inputFile;

	grunt.config('stylus.compile', {
		options: optionsConfig,
		files: filesConfig
	});
};
