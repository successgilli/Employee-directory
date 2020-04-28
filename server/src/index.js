import express from 'express';
import { config } from 'dotenv';
import debug from 'debug';

import routes from './routes';

config();

const debugInstance = debug('http');
const app = express();

app.use('/api/v1', routes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  debugInstance(`listening on port ${PORT}`);
});
