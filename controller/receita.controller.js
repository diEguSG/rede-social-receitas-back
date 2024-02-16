import { criar_receitas_model,curtida_model, seleciona_receita_model, seleciona_todos_receita_model,seleciona_todas_receitas_usuario_model, seleciona_curtidas_receitas_usuario_model } from "../models/receita.model.js";

export async function seleciona_todos_receitas_controller(req, res){
    const receita = await seleciona_todos_receita_model();
    return res.json(receita);
}
export async function criar_receitas_controller(req,res){
    const titulo = req.body.titulo;
    const descricao = req.body.descricao;
    const imagem = req.body.imagem;
    const id_categoria = req.body.id_categoria; 
    const id_usuario = req.body.id_usuario; 
    const receita =  await criar_receitas_model(titulo,descricao,imagem,id_categoria,id_usuario);
    return res.json(receita)
}
export async function curtida_controller(req,res){
    const id = req.params.id
    const value = req.body.curtida;
    const response = await curtida_model(id,value)

    return res.status(200).json(response)
}
export async function  seleciona_receita_controller(req,res){
    const id = req.params.id
    const response = await  seleciona_receita_model(id)
    return res.json(response)
}


export async function seleciona_todas_receitas_usuario_controller(req, res){
    
    const id_usuario = req.body.id_usuario;

    const receita = await seleciona_todas_receitas_usuario_model(id_usuario);
    return res.status(200).json({receita: receita});
}

export async function seleciona_curtidas_receitas_usuario_controller(req, res){
    
    const id_usuario = req.params.id_usuario;

    const receita = await seleciona_curtidas_receitas_usuario_model(id_usuario);

    return res.status(200).json({receita: receita[0]});
}