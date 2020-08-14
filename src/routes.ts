import express from 'express';
import classControllers from './controllers/classControllers';
import ConnectionsControllers from './controllers/ConnectionsControllers';

const routes = express.Router();
const ClassControllers = new classControllers();
const Connections = new ConnectionsControllers();

routes.get('/classes', ClassControllers.index);
routes.post('/classes', ClassControllers.create);

routes.get('/connections', Connections.index);
routes.post('/connections', Connections.create);


export default routes;