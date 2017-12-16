module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

  grunt.initConfig({
    babel: {
      options: {
        sourceMap: true,
        presets: ['env']
      },
      dist: {
        files: [
          // config
          {
            expand: true,
            cwd: 'config/',
            dest: 'build/config/',
            src: '**/*.js'
          },

          // controller
          {
            expand: true,
            cwd: 'controller/',
            dest: 'build/controller/',
            src: '**/*.js'
          },

          // model
          {
            expand: true,
            cwd: 'model/',
            dest: 'build/model/',
            src: '**/*.js'
          },

          // dao
          {
            expand: true,
            cwd: 'dao/',
            dest: 'build/dao/',
            src: '**/*.js'
          },

          // routes
          {
            expand: true,
            cwd: 'routes/',
            dest: 'build/routes/',
            src: '**/*.js'
          },
        ]
      }
    },
    uglify: {
      build: {
        files: [
          // config
          {
              expand: true,
              cwd: 'build/config/',
              dest: 'build/config/',
              src: '**/*.js'
          }, 

          // controller
          {
            expand: true,
            cwd: 'build/controller/',
            dest: 'build/controller/',
            src: '**/*.js'
          }, 

          // model
          {
            expand: true,
            cwd: 'build/model/',
            dest: 'build/model/',
            src: '**/*.js'
          },

          // dao
          {
            expand: true,
            cwd: 'build/dao/',
            dest: 'build/dao/',
            src: '**/*.js'
          },

          // routes
          {
            expand: true,
            cwd: 'build/routes/',
            dest: 'build/routes/',
            src: '**/*.js'
          },
        ],
      }
    },
  });

  grunt.registerTask('default', ['babel', 'uglify']);

}

  