import express from 'express';
import cors from 'cors';
import { conectarDB } from '../config/db.js';

export class Server {
  constructor() {
    this.app = express();
    this.port = 4000;
    this.databaseConnect();
    this.middlewares();
    this.routes();
  }

  async databaseConnect() {
    await conectarDB();
  }

  middlewares() {
    this.app.use(cors());
    //
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
