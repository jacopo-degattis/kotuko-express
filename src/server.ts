import app from './main'
import logger from './logger';

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Listening on port', port);
  logger.log('debug', `Listening on port ${port}`);
})