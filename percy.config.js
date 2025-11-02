module.exports = {
  version: 2,
  project: 'percy-test-dashboard',
  discovery: {
    allowedHostnames: ['localhost'],
    networkIdleTimeout: 750
  },
  snapshot: {
    enableJavaScript: true,
    widths: [1280],
    minHeight: 1024,
    // Wait for CSS and fonts to load
    waitForTimeout: 1000,
    waitForSelector: 'body',
    // Ensure all stylesheets are loaded
    percyCSS: '',
  }
};
