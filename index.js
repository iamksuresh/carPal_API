const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
import middlewareConfig from  './config/middleware';
import apiRoutes from  './modules';

middlewareConfig(app)
app.get('/', (req, res) => {
  res.send('Welcome to Carpal Api');
});

apiRoutes(app);


app.listen(port, () => console.log(`Listening on port ${port}`));