import { criar_receitas_model, curtida_model, seleciona_receita_model,seleciona_todas_receitas_usuario_model, seleciona_curtidas_receitas_usuario_model, seleciona_todas_receita_model } from "../models/receita.model.js";
import moment from "moment";

export async function seleciona_todas_receitas_controller(req, res){
    moment.locale('pt');

    moment.updateLocale('pt', {
        months : [
            "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho",
            "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
        ]
    });

    const receita = await seleciona_todas_receita_model();
    receita.forEach((item)=>{
        if(item.data_criacao){
            item.data_criacao = moment(item.data_criacao).format("DD [de] MMM [de] YYYY")
        }
    })
    return res.status(200).json(receita);
}

export async function criar_receitas_controller(req, res){
    
    const dados = req.body;

    const receita =  await criar_receitas_model(dados);
    return res.status(200).json(receita)
}

export async function curtida_controller(req, res){
    const id = req.params.id
    const value = req.body.curtida;
    const response = await curtida_model(id,value)

    return res.status(200).json(response)
}

export async function  seleciona_receita_controller(req,res){
    const id = req.params.id
    const receita = await seleciona_receita_model(id)
    return res.status(200).json(receita)
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