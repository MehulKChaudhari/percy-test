module.exports = {
  version: 2,
  project: 'percy-test-dashboard',
  discovery: {
    allowedHostnames: ['localhost'],
    networkIdleTimeout: 1500
  },
  snapshot: {
    enableJavaScript: true,
    widths: [1280],
    minHeight: 1024
  }
};
