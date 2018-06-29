module.exports = function(grunt) {

	grunt.registerTask('copyImages',
		'Copia las imágenes utilizadas a dist',
		function() {

		var srcPath = grunt.config('redmicConfig.srcPath'),
			distPath = grunt.config('redmicConfig.distPath'),
			imagesPath = srcPath + '/images',
			imagesSrcPath = './' + imagesPath,
			imagesDistPath = distPath + '/' + imagesPath;

		grunt.config('copy.copyImages', {
			files: [{
				cwd: imagesSrcPath,
				src: '**/*',
				dest: imagesDistPath,
				expand: true
			}]
		});

		grunt.task.run(['copy:copyImages']);
	});
};
