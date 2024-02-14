import {env} from "node:process";
import jwt from "jsonwebtoken";
import {seleciona_usuario_login_model, seleciona_dados_usuario_model} from "../models/usuario.model.js"
import {criar_usuario_model} from "../models/usuario.model.js";
import {atualizar_usuario_model} from "../models/usuario.model.js"

export async function seleciona_usuario_login_controller(req, res){

    const dados = {
        email: req.body.email,
        senha: req.body.senha
    }

    const usuario = await seleciona_usuario_login_model(dados);

    if(usuario.length == 0){
        return res.status(404).json({Erro: "Login Inválido"})
    }

    const token = jwt.sign({
        tipo_usuario: usuario[0].tipo_usuario,
        id_usuario: usuario[0].id
    },
    "process.env.SECRETKEY",{
        expiresIn: "24h",
        subject: String(usuario[0].id)
    }
    )

    return res.status(200).json({acesso_token: token, tipo_usuario: usuario[0].id_tipo_usuario, id_usuario: usuario[0].id});
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

    if(!usuario){
        return res.status(409).json({error_mail: "Dados informados já estão em uso!"})
    }

    return res.status(200).json("OK");
}

export async function atualizar_usuario_controller(req, res){
    
    const dados = req.body;
    const id_usuario = req.params.id_usuario;

    const usuario = await atualizar_usuario_model(dados, id_usuario);
    return res.status(200).json("OK", usuario);
}

export async function seleciona_dados_usuario_controller(req, res){
    
    const id_usuario = req.body.id_usuario;

    const usuario = await seleciona_dados_usuario_model(id_usuario);
    return res.json({usuario: usuario[0]});
}