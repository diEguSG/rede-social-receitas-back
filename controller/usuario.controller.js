import {seleciona_todos_usuarios_model} from "../models/usuario.model.js"

export async function seleciona_todos_usuarios_controller(req, res){
    const usuario = await seleciona_todos_usuarios_model();
    return res.json(usuario);
}

export async function criar_usuario_controller(req, res){
    const usuario = await criar_usuario_model();
    return res.json(usuario)
}