module.exports = function(grunt) {

	var preBuildCmds = ['npm install'];

	grunt.config('redmicConfig.buildModules', {
		'dep/pruneCluster': preBuildCmds.concat([
			'grunt uglify'
		])
	});
};
