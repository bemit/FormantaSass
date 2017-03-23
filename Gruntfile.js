module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    // Time
    require('time-grunt')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Sass / CSS
        sass: {
            main: {
                options: {
                    sourceMap: true
                },
                files: {
                    'main.css': 'main.scss'
                }
            },
            example: {
                options: {
                    sourceMap: true
                },
                files: {
                    'example/main.css': 'example/main.scss'
                }
            }
        },

        postcss: {
            main: {
                options: {
                    processors: [
                        require('pixrem')(), // add fallbacks for rem units
                        require('autoprefixer')({browsers: 'last 4 versions'})
                    ]
                },
                src: 'main.css'
            },
            example: {
                options: {
                    processors: [
                        require('pixrem')(), // add fallbacks for rem units
                        require('autoprefixer')({browsers: 'last 4 versions'})
                    ]
                },
                src: 'example/main.css'
            }
        },
        
        cssmin: {
            main: {
                files: [{
                    expand: true,
                    cwd: '',
                    src: ['main.css'],
                    dest: '',
                    ext: '.min.css'
                }]
            },
            example: {
                files: [{
                    expand: true,
                    cwd: '',
                    src: ['example/main.css'],
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
        },

        concurrent: {
            build: ['css', 'css-example', 'doc'],
        }
    });

    // Sass / CSS
    grunt.registerTask('css', ['sass:main', 'postcss:main', 'cssmin:main']);

    grunt.registerTask('css-example', ['sass:example', 'postcss:example', 'cssmin:example']);

    // Sassdoc
    grunt.registerTask('doc', ['sassdoc']);

    // Make all
    grunt.registerTask('build', ['concurrent:build']);
};