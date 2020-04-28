import { Router } from 'express';

const route = Router();

route.get('/', (req, res) => {
  res.send('employee get');
});

export default route;
