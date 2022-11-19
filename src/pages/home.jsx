import React from 'react'; // eslint-disable-line

function Home() {
  return (
    <header className="app-header">
      <p>
        Try change and save blocklet preference in blocklet server dashboard or{' '}
        <a href="/.well-known/service/admin/configuration" target="_blank">
          blocklet dashboard
        </a>{' '}
        and refresh this page
      </p>
      <pre style={{ textAlign: 'left' }}>
        <code>window.blocklet.preferences = {JSON.stringify(window.blocklet.preferences, null, 2)}</code>
      </pre>
      <a className="app-link" href="https://developer.blocklet.io/docs/" target="_blank" rel="noopener noreferrer">
        View Documentation
      </a>
    </header>
  );
}

export default Home;
