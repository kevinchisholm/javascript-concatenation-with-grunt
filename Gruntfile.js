module.exports = function(grunt) {

  // This is the configuration.
  grunt.initConfig({
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['src/script-1.js', 'src/script-2.js', 'src/script-3.js'],
        dest: 'dist/allScripts.js',
      },
    },
  });

  // Load the plugin that provides the "concat" task.
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Default task(s).
  grunt.registerTask('default', ['concat']);
};