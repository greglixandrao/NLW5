import { Router } from "express";
import { MessagesController } from "./controllers/MessagesController";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";

const routes = Router();

const settingsController = new SettingsController();
const usersController = new UsersController();
const messageController = new MessagesController();

routes.post("/settings", settingsController.create);
routes.get("/settings/:username", settingsController.findByUsername);
routes.put("/settings/:username", settingsController.update);

routes.post("/users", usersController.create);
routes.post("/messages", messageController.create);
routes.get("/messages/:id", messageController.showByUser);

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
