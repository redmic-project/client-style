module.exports = function(grunt) {

	grunt.registerTask('copyIconFonts',
		'Copia las fuentes de iconos a dist',
		function() {

		var iconFontsSrcPath = './',
			iconFontsDistPath = grunt.config('redmicConfig.distPath') + '/',
			paths = {
				'fontRedmic': 'submodules/Font-Awesome-Stylus/fonts',
				'fontAwesome': 'submodules/font-redmic/build',
				'iconMarkers': 'submodules/leaflet-awesome-markers/dist/images',
				'iconMeasure': 'submodules/leaflet-measure/dist/assets',
				'iconFlags': 'submodules/redmic-flag-icon-css/flags',
				'iconDraw': 'submodules/leaflet-draw/dist/images',
				'iconDijit': 'submodules/dijit/themes/claro/images' // TODO no se usarán estas images
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
