const express = require('express');


const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: 'public' });
  });

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });