module.exports = function(grunt) {

	grunt.registerTask('copyIconFonts',
		'Copia las fuentes de iconos a dist',
		function() {

		var iconFontsSrcPath = './',
			iconFontsDistPath = grunt.config('redmicConfig.distPath') + '/',
			paths = {
				'fontRedmic': 'dep/Font-Awesome-Stylus/fonts',
				'fontAwesome': 'dep/font-redmic/build',
				'iconMarkers': 'dep/leaflet.awesome-markers/dist/images',
				'iconMeasure': 'dep/leaflet-measure/dist/assets',
				'iconDraw': 'dep/leaflet-draw/dist/images',
				'iconDijit': 'dep/dijit/themes/claro/images' // TODO no se usarán estas images
			},
			subTasks = [];

		for (var id in paths) {
			var path = paths[id];
			grunt.config('copy.' + id, {
				files: [{
					cwd: iconFontsSrcPath + path,
					src: '**',
					dest: iconFontsDistPath + path,
					expand: true
				}]
			});
			subTasks.push('copy:' + id);
		}

		grunt.task.run(subTasks);
	});
};
