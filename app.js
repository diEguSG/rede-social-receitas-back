import {connection} from "./server.js";
import express from "express";
import {user_router} from "./rotas/usuario.rotas.js"

connection.connect(console.log("Banco Conectado"));

const app = express()

app.use(express.json());
app.use("/user", user_router);

app.listen(3003, console.log("Server Online"))