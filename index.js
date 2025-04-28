const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('client/dist'));

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});