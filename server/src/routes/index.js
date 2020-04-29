import { Router } from 'express';

import auth from './auth';
import users from './users';
import employees from './employees';

const route = Router();

route.use('/users', users);
route.use('/employees', employees);
route.use('/auth', auth);

export default route;
