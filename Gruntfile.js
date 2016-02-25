'use strict';

module.exports = function(grunt){

    require('time-grunt')(grunt);
    require('jit-grunt')(grunt, {
        useminPrepare: 'grunt-usemin'
    });

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
            }
        },
        useminPrepare: {
            html: 'app/views/index.html',
            options: {
                dest: 'dist'
            }
        },
        concat: {
            options:{
                separator: ';'
            },
            //dist configuration is provided bu useminPrepare
            dist: {}
        },
        uglify: {
            dist: {}
        },
        cssmin: {
            dist: {}
        },
        filerev: {
            options: {
                encoding: 'utf8',
                algorithm: 'md5',
                length: 20
            },
            release: {
                files: [{
                    src: [
                        'dist/scripts/*.js',
                        'dist/styles/*.css',
                    ]
                }]
            }
        },
        usemin: {
            html: ['dist/views/*.html'],
            css: ['dist/styles/*.css'],
            options: {
                assetsDirs: ['dist', 'dist/styles']
            }
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
        watch: {
            copy: {
                files: [ 'app/**', '!app/**/*.css', '!app/**/*.js'],
                tasks: [ 'build' ]
            },
            scripts: {
                files: ['app/scripts/app.js'],
                tasks:[ 'build']
            },
            styles: {
                files: ['app/styles/app.css'],
                tasks:['build']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    'app/{,*/}*.html',
                    '.tmp/styles/{,*/}*.css',
                    'app/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }
        },
        connect: {
            options: {
                port: 9000,
                // Change this to '0.0.0.0' to access the server from outside.
                hostname: 'localhost',
                livereload: 35729
            },
            dist: {
                options: {
                    open: true,
                    base:{
                        path: 'dist',
                        options: {
                            index: 'index.html',
                            maxAge: 300000
                        }
                    }
                }
            }
        },
        clean: {
            build: {
                src: ['dist/']
            }
        }
    });

    grunt.registerTask('build', [
        'clean',
        'jshint',
        'useminPrepare',
        'concat',
        'cssmin',
        'uglify',
        'copy',
        'filerev',
        'usemin'
    ]);

    grunt.registerTask('serve',['build','connect:dist','watch']);

    grunt.registerTask('default',[
        'build'
    ]);

};