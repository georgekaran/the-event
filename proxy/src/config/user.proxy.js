var options = {
    target: 'http://www.example.org', // target host
    changeOrigin: true, // needed for virtual hosted sites
    ws: true, // proxy websockets
    pathRewrite: {
      '^/api/old-path': '/api/new-path', // rewrite path
      '^/api/remove/path': '/path' // remove base path
    },
    router: {
      // when request.headers.host == 'dev.localhost:3000',
      // override target 'http://www.example.org' to 'http://localhost:8000'
      'dev.localhost:3000': 'http://localhost:8000'
    }
  };