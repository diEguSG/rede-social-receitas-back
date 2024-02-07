import {connection} from "./server.js";
import express from "express";
import {login, cadastro} from "./rotas/usuario.rotas.js";
import cors from "cors";
import { receita_router } from "./rotas/receita.rotas.js";

await connection.connect(console.log("Banco Conectado"));

const app = express()

app.use(cors());
app.use(express.json());
app.use("/login", login);
app.use("/cadastro", cadastro);
app.use("/receita",receita_router)

app.listen(3003, console.log("Server Online"));