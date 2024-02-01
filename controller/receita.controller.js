import { seleciona_todos_receita_model } from "../models/receita.model.js";

export async function seleciona_todos_receitas_controller(req, res){
    const receita = await seleciona_todos_receita_model();
    return res.json(receita);
}
