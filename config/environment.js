"use strict";

module.exports = function (environment) {
	let ENV = {
		modulePrefix: "rental-app",
		environment,
		rootURL: "/",
		locationType: "auto",
		EmberENV: {
			FEATURES: {
				// Here you can enable experimental features on an ember canary build
				// e.g. 'with-controller': true
			},
			EXTEND_PROTOTYPES: {
				// Prevent Ember Data from overriding Date.parse.
				Date: false,
			},
		},

		APP: {
			// Here you can pass flags/options to your application instance
			// when it is created
		},
	};

	if (environment === "development") {
		// ENV.APP.LOG_RESOLVER = true;
		// ENV.APP.LOG_ACTIVE_GENERATION = true;
		// ENV.APP.LOG_TRANSITIONS = true;
		// ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
		// ENV.APP.LOG_VIEW_LOOKUPS = true;
	}

	if (environment === "test") {
		// Testem prefers this...
		ENV.locationType = "none";

		// keep test console output quieter
		ENV.APP.LOG_ACTIVE_GENERATION = false;
		ENV.APP.LOG_VIEW_LOOKUPS = false;

		ENV.APP.rootElement = "#ember-testing";
		ENV.APP.autoboot = false;
	}

	if (environment === "production") {
		// use mirage in production too since the app will break
		// if there is no API for Ember Data
		ENV["ember-cli-mirage"] = {
			enabled: true,
		};
	}

	ENV["ember-simple-leaflet-maps"] = {
		url: process.env.LEAFLET_MAPS_URL || "https://unpkg.com",
		version: process.env.LEAFLET_MAPS_VERSION || "1.3.4",
		apiKey:
			"pk.eyJ1IjoiYXNrZXh0IiwiYSI6ImNrZGU2emE2dDF6b3cyc2s2NTVqMG1yd3IifQ.iQeON-aguX3HX6obRgMyyw",
	};

	return ENV;
};
