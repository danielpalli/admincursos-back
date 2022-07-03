import express from 'express';
import cors from 'cors';

export class Server {
  constructor() {
    this.app = express();
    this.port = 4000;
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    // this.app.use(express.static('public'));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', (req, res) => {
      res.json({
        message: 'Hello World',
      });
    });
  }

  start() {
    this.app.listen(this.port, () => {
      console.log('Server on port', this.port);
    });
  }
}
