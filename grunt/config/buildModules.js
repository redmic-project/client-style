module.exports = function(grunt) {

	var preBuildCmds = ['yarn install'];

	grunt.config('redmicConfig.buildModules', {
		'submodules/pruneCluster': preBuildCmds.concat([
			'grunt uglify'
		])
	});
};
