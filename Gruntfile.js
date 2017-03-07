module.exports = function(grunt) {
    // Time
    require('time-grunt')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Sass / CSS
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'main.css': 'main.scss'
                }
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: '',
                    src: ['main.css', '!main.css.map'],
                    dest: '',
                    ext: '.min.css'
                }]
            }
        },
        sassdoc: {
            bare: {
                src: '**/*.scss',
                options: {
                    groups: {
                        'undefined': 'Ungrouped',
                        'Animation': 'Animation',
                        'Grid': 'Grid'
                    },
                    display: {
                        watermark: true
                    }
                }
            }
        }
    });

    // Sass / CSS
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('css', ['sass', 'cssmin']);

    // Sassdoc
    grunt.loadNpmTasks('grunt-sassdoc');
    grunt.registerTask('sassdoc', ['sassdoc']);
};