import express from 'express';
import config from './config/config.js'
import morgan from 'morgan';

const port = config.general.port;

const app = express();

app.use(express.json());
app.use(morgan('combined'));

app.get('/', (req, res) => {
  res.send({
    message: 'Hello World from Node Express API',
    version: process.env.npm_package_version
  })
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
  console.log(`Application is running in ${config.general.environment}`);
});