import express from "express";
import "./database";

import { routes } from "./routes";

const app = express();

/**
 * GET = Buscas
 * POST = Criação
 * PUT = Alteração
 * DELETE = Deletar
 * PATCH = Alterar uma informação especifica
 */

app.use(express.json());

app.use(routes);

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
