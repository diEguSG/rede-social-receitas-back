import {Router} from "express";
import {seleciona_usuario_controller, criar_usuario_controller, atualizar_usuario_controller} from "../controller/usuario.controller.js";

export const login = Router();
export const cadastro = Router();
login.post("", seleciona_usuario_controller);
cadastro.post("", criar_usuario_controller);
cadastro.patch("/:id_usuario", atualizar_usuario_controller);
