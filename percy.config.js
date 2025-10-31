module.exports = {
  version: 2,
  project: 'percy-test-dashboard',
  discovery: {
    allowedHostnames: ['localhost'],
    networkIdleTimeout: 750
  },
  static: {
    files: '**/*.css',
    baseUrl: '/'
  }
};
