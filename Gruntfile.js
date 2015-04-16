module.exports = function(grunt) {

    // Add the grunt-mocha-test tasks.
    grunt.loadNpmTasks("grunt-mocha-test");

    grunt.initConfig({
        mochaTest: {
            test: {
                options: {
                    reporter: "spec"
                },
                src: ["src/test/**/*.js"]
            }
        }
    });

    grunt.registerTask("test", "mochaTest");
    grunt.registerTask("default", "test");

};