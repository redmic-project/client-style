module.exports = function(grunt) {

	grunt.config('redmicConfig.buildModules', {
		'dep/pruneCluster': [
			'grunt uglify'
		]
	});
};
