import {seleciona_todos_usuarios_model} from "../models/usuario.model.js"
import {criar_usuario_model} from "../models/usuario.model.js";
import {atualizar_usuario_model} from "../models/usuario.model.js"

export async function seleciona_todos_usuarios_controller(req, res){
    const usuario = await seleciona_todos_usuarios_model();
    return res.json(usuario);
}

export async function criar_usuario_controller(req, res){

    const dados = {
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha,
        id_tipo_usuario: req.body.id_tipo_usuario,
        id_situacao_usuario: req.body.id_situacao_usuario
    }

    const usuario = await criar_usuario_model(dados);
    return res.json(usuario)
}

export async function atualizar_usuario_controller(req, res){
    
    const dados = req.body;
    const id_usuario = req.params.id_usuario;

    const usuario = await atualizar_usuario_model(dados, id_usuario);
    return res.json(usuario);
}