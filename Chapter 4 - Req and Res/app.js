const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method,req.headers);
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Complete Coding</title></head>')
  res.write('<body>Hello This is First Program of NodeJS</body>')
  res.write('</html>');
  res.end();
  // process.exit(); // stop event loop

});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
