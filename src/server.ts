import express from 'express';

const app = express();
app.use(express.json());
app.get('/', (req, res) => {
  return res.json('funfonando');
});

app.post('/courses', (req, res) => {
  const { name } = req.headers;
  return res.json({ name });
});
app.listen(3333, () => {
  console.log('http://localhost:3333/');
});
