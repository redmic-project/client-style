module.exports = function(grunt) {

	var preBuildCmds = ['yarn install'];

	grunt.config('redmicConfig.buildModules', {
		'dep/pruneCluster': preBuildCmds.concat([
			'grunt uglify'
		])
	});
};
