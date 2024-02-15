import {Router} from "express";
import { criar_receitas_controller, curtida_controller, seleciona_receita_controller, seleciona_todos_receitas_controller } from "../controller/receita.controller.js";


export const receita_router = Router();
receita_router.get("", seleciona_todos_receitas_controller);
receita_router.post("",criar_receitas_controller )
receita_router.patch("/:id/curtida",curtida_controller )
receita_router.get("/:id", seleciona_receita_controller);