/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ember-workshop',
    environment: environment,
    baseURL: '/ember-workshop',
    locationType: 'hash',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  ENV.contentSecurityPolicy = {
    'default-src': "'none'",
    'script-src': "'self'",
    'font-src': "'self' https://fonts.gstatic.com",
    'connect-src': "'self'",
    'img-src': "'self' data:",
    'style-src': "'self' 'unsafe-inline' https://fonts.googleapis.com",
    'media-src': "'self'"
  };

  return ENV;
};
