import {Router} from "express";
import {admin_deletar_postagem_controller} from "../controller/admin.controller.js"


export const admin_deletar_postagem = Router();

admin_deletar_postagem.post("", admin_deletar_postagem_controller)