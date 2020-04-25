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
                    'dist/example/main.css': 'dist/example/main.scss'
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
                src: 'dist/example/main.css'
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
                    src: ['dist/example/main.css'],
                    dest: '',
                    ext: '.min.css'
                }]
            }
        },

        sassdoc: {
            doc: {
                src: '**/*.scss',
                options: {
                    verbose: true,
                    //theme: 'default',
                    theme: '@formanta/sass-doctheme',

                    dest: './dist/sassdoc',
                    groups: {
                        'undefined': 'Ungrouped',
                        'Animation': 'Animation',
                        'Calculation': 'Calculation',
                        'Container': 'Container',
                        'Color': 'Color',
                        'Grid': 'Grid',
                        'Grid:Gutter': 'Grid: Gutter',
                        'Grid:Breakpoint': 'Grid: Breakpoint',
                        'Grid:Visibility': 'Grid: Visibility'
                    },
                    display: {
                        alias: true,
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