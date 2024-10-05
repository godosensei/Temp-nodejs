const http = require(`http`);

const server = http.createServer((req, res) => {
  if (req.url === `/`) {
    res.end(`Home-Page`);
  }
  if (req.url === `/about`) {
    res.end(`About-Page`);
  }
  res.end(
    ` <h1>Error</h1>
   <p>Page-not-found</p>
   <a href = "/">back to home page</a>`
  );
});
server.listen(4000);
