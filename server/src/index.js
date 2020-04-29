import express from 'express';
import { config } from 'dotenv';
import debug from 'debug';

import routes from './routes';

config();

const debugInstance = debug('http');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1', routes);

app.use('*', (req, res) => {
  res.status(404).json({
    status: 400,
    message: 'route not found',
  });
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  let { status } = err;

  if (!status) status = 500;

  res.status(status).json({
    message: err.message,
    status,
  });
});

app.listen(PORT, () => {
  debugInstance(`listening on port ${PORT}`);
});
