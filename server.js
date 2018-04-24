const PORT = process.env.PORT || 5000;
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('hello world'));

app.listen(PORT, () => console.log(`listening on ${PORT}`));
