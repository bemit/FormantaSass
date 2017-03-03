module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // CSS
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
    });

    // SASS
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('css', ['sass', 'cssmin']);
};