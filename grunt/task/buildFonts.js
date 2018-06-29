module.exports = function(grunt) {

	grunt.registerTask('buildFonts',
		'Descarga y convierte a css las fuentes utilizadas',
		function() {

		var distPath = grunt.config('redmicConfig.distPath') + '/';

		grunt.config('shell.buildFonts', {
			options: {
				stdout: true
			},
			command: function() {

				var binPath = './node_modules/webfont-dl/bin/webfont-dl',

					oParam = ' -o ' + distPath,
					fontOutParam = ' --font-out ' + distPath,
					formatsParams = ' --woff2=omit --woff1=data --svg=omit --ttf=omit --eot=omit',

					commonParams = fontOutParam + formatsParams;

				return [
					binPath + ' "https://fonts.googleapis.com/css?family=Open+Sans:400italic,600,400"' +
						oParam + 'OpenSans.css' + commonParams,

					binPath + ' "https://fonts.googleapis.com/css?family=Exo+2:700"' +
						oParam + 'Exo2.css' + commonParams
				].join('; ');
			}
		});

		grunt.task.run(['shell:buildFonts']);
	});
};
