#!/usr/bin/node

import express from 'express';
import routes from './routes/index';

const app = express();

app.use('/', routes);

app.listen(1245, '127.0.0.1');

export default app;
