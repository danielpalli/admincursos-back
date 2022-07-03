import express from 'express';
import cors from 'cors';

export class Server {
  constructor() {

    this.app = express();
    this.config();
    this.routes();
  }

  config() {
    this.app.set('port', 4000);
    this.app.use(cors());
  }

  routes() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  start() {
    this.app.listen(this.app.get('port'), () => {
      console.log('Server on port', this.app.get('port'));
    });
  }
}
