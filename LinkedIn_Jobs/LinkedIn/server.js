var knex = require('knex')({
    client: 'mysql',
    connection: {
        host : '127.0.0.1',
        user: 'root',
        password: '1',
        database: 'LinkedIn_Jobs'
    }
});

const express = require("express");
const app = express();

app.use(express.json());

const jobs = express.Router();
app.use('/jobs', jobs);

require('./Router/jobs')(jobs, knex);

const main = express.Router();
app.use('/main', main);
require('./Router/main')(main)

const port = process.env.PORT || 8000;
app.listen(port, ()=>{
    console.log(`Port is listening at ${port}`)
});
