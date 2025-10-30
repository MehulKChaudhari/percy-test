<template>
  <div class="main-page">
    <header class="header">
      <div class="container">
        <h1 class="logo">Percy Test Dashboard</h1>
        <nav class="nav">
          <a href="#" class="nav-link">Dashboard</a>
          <a href="#" class="nav-link">Snapshots</a>
          <a href="#" class="nav-link">Settings</a>
        </nav>
      </div>
    </header>

    <main class="main-content">
      <div class="container">
        <section class="hero">
          <h2 class="hero-title">Visual Regression Testing</h2>
          <p class="hero-description">
            Monitor your UI changes with Percy snapshot testing. 
            Ensure your application looks perfect across all environments.
          </p>
          <div class="hero-actions">
            <button class="btn btn-primary">Run Tests</button>
            <button class="btn btn-secondary">View Reports</button>
          </div>
        </section>

        <section class="stats-grid">
          <div class="stat-card">
            <div class="stat-icon">📊</div>
            <div class="stat-content">
              <h3 class="stat-number">24</h3>
              <p class="stat-label">Total Snapshots</p>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">✅</div>
            <div class="stat-content">
              <h3 class="stat-number">22</h3>
              <p class="stat-label">Passing</p>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">❌</div>
            <div class="stat-content">
              <h3 class="stat-number">2</h3>
              <p class="stat-label">Failing</p>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">🔄</div>
            <div class="stat-content">
              <h3 class="stat-number">91.7%</h3>
              <p class="stat-label">Success Rate</p>
            </div>
          </div>
        </section>

        <section class="recent-tests">
          <h2 class="section-title">Recent Test Results</h2>
          <div class="test-results">
            <div class="test-item">
              <div class="test-info">
                <h4 class="test-name">Homepage Layout</h4>
                <p class="test-description">Main page layout and navigation</p>
              </div>
              <div class="test-status status-passing">Passing</div>
              <div class="test-time">2 minutes ago</div>
            </div>
            <div class="test-item">
              <div class="test-info">
                <h4 class="test-name">User Profile</h4>
                <p class="test-description">User profile page components</p>
              </div>
              <div class="test-status status-failing">Failing</div>
              <div class="test-time">5 minutes ago</div>
            </div>
            <div class="test-item">
              <div class="test-info">
                <h4 class="test-name">Mobile Navigation</h4>
                <p class="test-description">Mobile responsive navigation</p>
              </div>
              <div class="test-status status-passing">Passing</div>
              <div class="test-time">8 minutes ago</div>
            </div>
            <div class="test-item">
              <div class="test-info">
                <h4 class="test-name">Form Components</h4>
                <p class="test-description">Input fields and buttons</p>
              </div>
              <div class="test-status status-passing">Passing</div>
              <div class="test-time">12 minutes ago</div>
            </div>
          </div>
        </section>
      </div>
    </main>

    <footer class="footer">
      <div class="container">
        <p>&copy; 2024 Percy Test Dashboard. Built with Ember.js</p>
      </div>
    </footer>
  </div>
</template>
