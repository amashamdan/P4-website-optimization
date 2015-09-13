module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      images1: {
        options: {
          engine: 'gm',
          sizes: [{
            width: '100%',
            quality: 50
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'img/',
          dest: 'images/'
        }]
      },
      images2: {
        options: {
          engine: 'gm',
          sizes: [{
            width: '100%',
            quality: 50
          },
          {
            width: 100,
            quality: 50
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'views/images',
          dest: 'images/'
        }]
      }
    },

    uglify: {
	    build1: {
	        src: 'js/perfmatters.js',
	        dest: 'js/perfmatters.min.js'
	    },
	    build2: {
	    	src: 'views/js/main.js',
	    	dest: 'views/js/main.min.js' 
	    },
	},

	cssmin: {
	  css1:{
	    src: 'views/css/bootstrap-grid.css',
	    dest: 'views/css/bootstrap-grid.min.css'
	  },
	  css2:{
	    src: 'css/print.css',
	    dest: 'css/print.min.css'
	  },
	},

  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['cssmin', 'uglify', 'responsive_images']);
};
