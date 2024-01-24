import {Router} from "express";
import {seleciona_todos_usuarios_controller, criar_usuario_controller} from "../controller/usuario.controller.js";

export const user_router = Router();
user_router.get("", seleciona_todos_usuarios_controller);
user_router.post("", criar_usuario_controller)