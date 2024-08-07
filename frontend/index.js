const http = require('http');
require('dotenv').config();

const port = process.env.PORT || 3000;
const backendApiUrl = process.env.BACKEND_API_URL || 'http://localhost:3001/api/name';

const requestListener = (req, res) => {
  if (req.url === '/') {
    http.get(backendApiUrl, (backendRes) => {
      let data = '';
      backendRes.on('data', (chunk) => {
        data += chunk;
      });
      backendRes.on('end', () => {
        try {
          const parsedData = JSON.parse(data);
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.end(parsedData.name); 
        } catch (err) {
          console.error('Error parsing backend response:', err.message);
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Error parsing backend response');
        }
      });
    }).on('error', (err) => {
      console.error('Error fetching data from backend API:', err.message);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Error fetching data from backend API');
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
};

const server = http.createServer(requestListener);
server.listen(port, () => {
  console.log(`Frontend server running on http://localhost:${port}`);
});
