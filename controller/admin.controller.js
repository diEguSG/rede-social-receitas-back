import {admin_deletar_postagem_model} from "../models/admin.model.js";

export async function admin_deletar_postagem_controller(req, res){
    const id_receita = req.body.id;

    const admin = await admin_deletar_postagem_model(id_receita);

    return res.status(204).json(admin);
}