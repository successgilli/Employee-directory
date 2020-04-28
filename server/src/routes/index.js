import { Router } from 'express';

import users from './users';
import employees from './employees';

const route = Router();

route.use('/users', users);
route.use('/employees', employees);

export default route;
