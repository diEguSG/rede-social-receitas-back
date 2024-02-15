import {Router} from "express";
import { criar_receitas_controller, seleciona_todos_receitas_controller, seleciona_todas_receitas_usuario_controller, seleciona_curtidas_receitas_usuario_controller } from "../controller/receita.controller.js";


export const receita_router = Router();
export const receita_usuario = Router();
receita_router.get("", seleciona_todos_receitas_controller);
receita_router.post("",criar_receitas_controller);
receita_usuario.post("", seleciona_todas_receitas_usuario_controller);
receita_usuario.patch("/:id_usuario", seleciona_curtidas_receitas_usuario_controller)