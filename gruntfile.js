module.exports = function (grunt) {
  grunt.initConfig({
    unclassify: {
      options: {
        stylesheets: ['./styles/*.css'],
        overwrite: true
      },
      src: ['./*.html']
    },
    uncss: {
      dist: {
        files: {
          'styles/styles.css': ['index.html', 'catalog.html']
        }
      }
    }

  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-unclassify');


  // Default tasks
  grunt.registerTask('default', ['unclassify']);
};
