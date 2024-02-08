import { criar_receitas_model, seleciona_todos_receita_model } from "../models/receita.model.js";

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
    return res.status(200).json({id:id})
}