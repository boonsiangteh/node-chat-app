const path = require('path');
const express = require('express');

const app = express();

// create default port or get from env variable
const port = process.env.PORT || 3005;

const publicPath = path.join(__dirname, '../public');
console.log(publicPath);

app.use(express.static(publicPath));

// app.get('/', (req, res) => {
//   res.render('index.html');
// });

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
