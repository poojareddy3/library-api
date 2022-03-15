const express = require('express');
const routes = require('./routes');
const db = require('./db');
const logger = require('morgan');
const cors = require('cors');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());

// app.use(cors({
//     origin: "http://127.0.0.1:5500",

// }))

// app.use("/", (req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
//     res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
//     res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.sendStatus(204);
//   });

  app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
  

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));

app.use('/api', routes);

db.on('error', console.error.bind(console, 'MongoDB Connection error:'));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));