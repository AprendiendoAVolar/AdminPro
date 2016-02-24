'use strict';

module.exports = function(grunt){

    require('time-grunt')(grunt);
    require('jit-grunt')(grunt);

    //Define the configuration for all the tasks
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: {
                src: [
                    'Gruntfile.js',
                    'app/scripts/{,*/}*.js'
                ]
            },
            copy: {
                dist: {
                    cwd: 'app',
                    src: ['**','!styles/**/*.css','!scripts/**/*.js'],
                    dest: 'dist',
                    expand: true
                },
                fonts: {
                    files: [
                        {
                            //for boostrap fonts
                            //tendriamos que cambiarlo por materialize
                            expand:true,
                            dot: true,
                            cwd: 'bower_components/boostrap/dist',
                            src: ['fonts/*.*'],
                            dest: 'dist'
                        },  {
                            //aca iria lo de font-awesome pero no lo usamos...
                        }
                    ]
                }
            },

            clean: {
                build: {
                    src: ['dist/']
                }
            }
        }
    });

    grunt.registerTask('build', [
        'clean',
        'jshint',
        'copy'
    ]);

    grunt.registerTask('default',[
        'build'
    ]);

};