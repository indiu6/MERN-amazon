import express from 'express';
import data from './data.js'; //todo in server-side, need to append '.js'

const app = express();

app.get('/', (req, res) => {
  res.send('Server is ready');
});

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
