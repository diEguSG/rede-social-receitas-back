import {connection} from "./server.js";
import express from "express";
import {login, cadastro, atualizar_cadastro} from "./rotas/usuario.rotas.js";
import cors from "cors";
import { receita_router, receita_usuario } from "./rotas/receita.rotas.js";

await connection.connect(console.log("Banco Conectado"));

const app = express()

app.use(cors());
app.use(express.json());
app.use("/login", login);
app.use("/cadastro", cadastro);
app.use("/receita", receita_router);
app.use("/receita_usuario", receita_usuario);
app.use("/atualizar_cadastro", atualizar_cadastro);

app.listen(3003, console.log("Server Online"));