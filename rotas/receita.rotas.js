import {Router} from "express";
import { seleciona_todos_receitas_controller } from "../controller/receita.controller.js";


export const receita_router = Router();
receita_router.get("", seleciona_todos_receitas_controller);
