module.exports = function(grunt) {

	grunt.registerTask('build', [
		'clean:build', 'addModules', 'buildModules', 'buildFonts', 'stylus', 'cssmin', 'copyImages', 'copyIconFonts',
		'clean:release'
	]);
};
