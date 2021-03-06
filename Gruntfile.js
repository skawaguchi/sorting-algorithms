module.exports = function(grunt) {
  'use strict';

  // ============================================
  // Grunt Configuration
  // ============================================

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    // --------------------------------------------
    // Benchmark
    // --------------------------------------------

    benchmark: {
      app: {
        src: [
          'app/scripts/*.js',
          'app/benchmarks/*.js'
        ],
        dest: 'app/benchmarks/results.csv',
        options: {
          displayResults: true
        }
      },
      dist: {
        src: [
//          'dist/scripts/sorting-algorithms.min.js',
          'dist/benchmarks/*.js'
        ],
        dest: 'dist/benchmarks/results.csv',
        options: {
          displayResults: true
        }
      }
    },

    // --------------------------------------------
    // Clean
    // --------------------------------------------

    clean: {
      build: 'build',
      distpre: ['dist'],
      distpost: [
        'dest'
      ],
      server: '.tmp'
    },


    // --------------------------------------------
    // Concatenate Files
    // --------------------------------------------

    concat: {
      core: {
        src: [
          'app/scripts/*.js'
        ],
        dest: 'dist/scripts/sorting-algorithms.src.js'
      }
    },


    // --------------------------------------------
    // Copy Files
    // --------------------------------------------

    copy: {
      dist: {
        files: [
          {
            expand: true,
            cwd: 'app',
            src: [
              'benchmarks/*',
              'libraries/**',
              'tests/*',
              '*.html'
            ],
            dest: 'dist/',
            filter: 'isFile'
          }
        ]
      }
    },


    // --------------------------------------------
    // Express: Local Node.js Test Server
    // --------------------------------------------


    express: {
      app: {
        options: {
          port: 9998,
          hostname: '0.0.0.0',
          bases: ['app/.']
        }
      },
      dist: {
        options: {
          port: 9999,
          hostname: '0.0.0.0',
          bases: ['dist/.']
        }
      }
    },



    // --------------------------------------------
    // JSHint: JavaScript Code Hinting
    // --------------------------------------------

    jshint: {
      files: [
        'Gruntfile.js',
        'app/scripts/*.js'
      ],
      options: {
        // options here to override JSHint defaults
        undef: false,
        globals: {
//          jQuery: true,
//          console: true,
//          module: true,
//          document: true
        }
      }
    },


    // --------------------------------------------
    // Open
    // --------------------------------------------

    open: {
      app: {
        url: 'http://localhost:<%= express.app.options.port %>/jasmine-tests.html'
      },
      dist: {
        url: 'http://localhost:<%= express.dist.options.port %>/jasmine-tests.html'
      }
    },


    // --------------------------------------------
    // Uglify: JS Minification
    // --------------------------------------------

    uglify: {
      src: {
        options: {
          report: 'gzip',
          mangle: false
        },
        src: ['dist/scripts/sorting-algorithms.src.js'],
        dest: 'dist/scripts/sorting-algorithms.min.js'
      }
    },

    // --------------------------------------------
    // UseMin: Production HTML File Prep
    // --------------------------------------------

    usemin: {
      html: [
        'dist/benchmarks.html',
        'dist/jasmine-tests.html'
      ]
    }

  });


  // ============================================
  // Load Node Modules
  // ============================================

  grunt.loadNpmTasks('grunt-benchmark');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express');
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-usemin');


  // ============================================
  // Grunt Task Creation
  // ============================================

  grunt.registerTask('server', [
    'app-server',
    'dist-server',
    'express-keepalive'
  ]);

  // for running a painless local server
  grunt.registerTask('app-server', [
    'clean:server',
    'express:app',
    'open:app'
  ]);

  // for running a painless local server
  grunt.registerTask('dist-server', [
    'clean:server',
    'express:dist',
    'open:dist'
  ]);

  // benchmark.js
  grunt.registerTask('compare', [
    'benchmark:app',
    'benchmark:dist'
  ]);

  // Create the production distribution version
  grunt.registerTask('dist', [
    // Clear the dist folder
    'clean:distpre',

    // Check to make sure js code is valid
    'jshint',

    // Combine the JS files common to both web and digital signage versions
    'concat',

    // Minify the temp web js code
    'uglify',

    // Copy over all of the unchanged files to dist
    'copy:dist',

    // Replace the individual JS links with one link in the HTML files
    'usemin',

    // Clean up all of the
    'clean:distpost'
  ]);

  grunt.registerTask('default', [
    'dist'
  ]);

};