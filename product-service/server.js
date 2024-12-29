const express = require('express');
const app = express();
const PORT = 3002;

app.get('/products', (req, res) => {
  res.json([{ id: 1, name: 'Product 1' }]);
});

app.listen(PORT, () => {
  console.log(`Product Service running on port ${PORT}`);
});
