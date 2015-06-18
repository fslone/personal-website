module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    mkdir: {
      deployable: {
        options: {
          create: ["deployable"]
        }
      }
    },
    copy: {
      main: {
        files: [
          {
            expand: true,
            src: [
              "**",
              "!package.json",
              "!.gitignore",
              "!.git/**",
              "!Gruntfile.js",
              "!node_modules/**",
              "!deployable/**"
            ],
            dest: "deployable"
          }
        ]
      }
    },
    uglify: {
      min: {
        files: [{
           expand: true,
           src: [
             'deployable/**/*.js'
           ]
        }]
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          src: ['deployable/**/*.css']
        }]
      }
    },
    xmlmin: {
      dist:{
        files: [{
          expand: true,
          src: [
            'deployable/**/*.xml'
          ]
        }]
      }
    },
    replace: {
      replaceCacheBustToken: {
        src: [
          "package/public/js/lib/bs.ui.js"
        ],
        overwrite: true,
        replacements: [
          {
            from: /"\?bust=" \+ \(new Date\(\)\).getTime\(\)/g,
            to: '"?bust=<%= grunt.file.readJSON("package.json").version %>"'
          }
        ]
      }
    }
  });

  // Load plugins
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-mkdir");
  grunt.loadNpmTasks("grunt-text-replace");
  grunt.loadNpmTasks("grunt-xmlmin");

  // Register tasks
  grunt.registerTask("buildDeployable", [
    "mkdir:deployable",
    "copy:main",
    "uglify",
    "cssmin",
    "xmlmin"
  ]);
};
