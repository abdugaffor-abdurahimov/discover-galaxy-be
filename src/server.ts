import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import expressListEndpoint from 'express-list-endpoints';

import { errorHandler } from './middlewares/error.middleware';
import { notFoundHandler } from './middlewares/not-found.middleware';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use(errorHandler);
app.use(notFoundHandler);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(expressListEndpoint(app));
  console.log('App is running on port ' + port);
});

