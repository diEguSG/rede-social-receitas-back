import {connection} from "./server.js";
import express from "express";
import {login, cadastro} from "./rotas/usuario.rotas.js";
import cors from "cors";

await connection.connect(console.log("Banco Conectado"));

const app = express()

app.use(cors());
app.use(express.json());
app.use("/login", login);
app.use("/cadastro", cadastro);

app.listen(3003, console.log("Server Online"));