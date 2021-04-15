import { Router } from 'express';

import transactionsRouter from './transactions.routes';

const routes = Router();

routes.use('/school', transactionsRouter);

export default routes;
