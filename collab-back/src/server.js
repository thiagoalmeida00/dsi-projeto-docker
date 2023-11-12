require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const BootstrapService = require('./service/bootstrap_service');


mongoose.connect(process.env.DATABASE_URL).then(() => {
  BootstrapService.boot();
});

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/login', require('./controller/login_controller'));
app.use('/users', require('./controller/user_controller'));
app.use('/artists', require('./controller/artist_controller'));
app.use('/flashes', require('./controller/flash_controller'));

app.listen(parseInt(process.env.SERVER_PORT), () => {
  console.log(`Server is running at http://localhost:${process.env.SERVER_PORT}`);
});