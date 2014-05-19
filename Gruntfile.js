module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
		
		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'www/css/style.css': 'build/scss/style.scss'
				}
			}
		},

        concat: {
            dist: {
            		src: ['build/js/scripts/*.js'],
				dest: 'build/js/scripts.js',
            },
			push: {
            		src: ['build/js/scripts.js'],
				dest: 'www/js/scripts.js',
			}
        },
	
		watch: {
			options: {
				livereload: true,
			},
            html: {
                files: ['www/*.html'],
            },
			   
			sass: {
				options: {
					livereload: false
				},
				files: [
					'build/scss/*.scss',
                    'build/scss/partials/*.scss',
                    'build/scss/globals/*.scss'
					],
				tasks: ['sass'],
			},
			scripts: {
				files: ['build/js/scripts/*.js'],
				tasks: ['concat'],
			}			
		}
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-concat');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat','sass', 'watch']);

};
