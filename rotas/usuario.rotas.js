import {Router} from "express";
import {seleciona_usuario_login_controller, criar_usuario_controller, atualizar_usuario_controller, seleciona_dados_usuario_controller} from "../controller/usuario.controller.js";

export const login = Router();
export const cadastro = Router();
export const atualizar_cadastro = Router();
login.post("", seleciona_usuario_login_controller);
cadastro.post("", criar_usuario_controller);
cadastro.patch("/:id_usuario", atualizar_usuario_controller);
atualizar_cadastro.post("", seleciona_dados_usuario_controller);