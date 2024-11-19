module.exports = function(grunt) {

	grunt.registerTask('build', [
		'clean:build', 'addModules', 'buildModules', 'buildFonts', 'stylus', 'cssmin', 'copyIconFonts',
		'clean:release'
	]);
};
