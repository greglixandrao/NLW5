import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController";

const routes = Router();

const settingsController = new SettingsController();

routes.post("/settings", settingsController.create);

export { routes };

/**
 * Tipos de parâmetros da URL
 * Routes Params => Parâmetros de rotas:
 * http://localhost:3333/settings/1
 * Query Params =>Filtros e buscas:
 * http://localhost:3333/settings/1?search=algumacoisa
 *
 * Body params => {
 *  Objeto que vem ou é enviado no corpo requisição ou pedido
 * }
 *
 */
