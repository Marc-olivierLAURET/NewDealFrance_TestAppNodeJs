const express = require('express');
const cors = require('cors');
var routes = require('./routes/routes');

const app = express();
app.use(cors());

routes(app);

const port = process.env.PORT || 8080;
app.listen(port);

console.log('🏃 App is running on port ' + port);
