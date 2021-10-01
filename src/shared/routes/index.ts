import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ message: 'JSON de Retorno!' });
});

export default routes;
