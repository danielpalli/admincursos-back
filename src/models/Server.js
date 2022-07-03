import express from 'express';
import cors from 'cors';
import usuarioRoutes from '../routes/usuarioRoutes.js';
import { conectarDB } from '../config/db.js';

export class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = '/api/usuarios';
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

    this.app.use(this.usuariosPath, usuarioRoutes);
  }

  start() {
    this.app.listen(this.port, () => {
      console.log('Server on port', this.port);
    });
  }
}
