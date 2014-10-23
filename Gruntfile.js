/*global module */
module.exports = function (grunt) {
	"use strict";

	var config;

	config = {
		pkg: grunt.file.readJSON("package.json"),

		// TypeScript
		typescript: {
			options: {
				//module: "amd",
				target: "es5",
				sourceMap: true,
				declaration: false // Create a d.ts file
			},
			frontend: {
				src: ["source/typescript/**/*.ts"],
				dest: "build/javascript/tsxkp.js"
			}
		}
	};

	// Project configuration.
	grunt.initConfig(config);

	grunt.loadNpmTasks("grunt-typescript");
};