const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const itemsController = require('./Server/items_controller');

app.use(bodyParser.json());
app.use(express.static( __dirname + '/../public/build'));

app.post('/api/list/', itemsController.create);
app.get('/api/list/', itemsController.read);
app.put('/api/list/', itemsController.update);
app.delete('/api/list/:id', itemsController.delete);

const port = 3002
app.listen(port, () => console.log(`listening on port ${port}`))