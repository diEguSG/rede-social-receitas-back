import { seleciona_todas_receitas_usuario_controller } from "../controller/receita.controller.js";
import { connection } from "../server.js";
import moment from "moment";

export async function seleciona_todas_receita_model(){
    
    try {
        const [result, fields] = await connection.query('select * from receita;')
        return result;

    } catch (error) {
        console.log(error)
    }   
}

export async function criar_receitas_model(dados){
    const dataAtual = moment().format()
    try {
        const [result, fields] = await connection.query(`insert into receita (titulo, descricao, imagem, id_categoria, id_usuario) values ('${dados.titulo}', '${dados.descricao}', '${dados.imagem}', '${dados.id_categoria}', ${dados.id_usuario});`)
        return result;

    } catch (error) {
        console.log(error)
    }
}

export async function curtida_model(id, curtida){
    const [receita, fields] = await connection.query(`select * from receita where id = ${id}`)
    await connection.query(`update receita set curtida=${curtida ? receita[0].curtida + 1 : receita[0].curtida-1} where id=${receita[0].id}`)
    
    const [receita_atualizada, field_atualizado] = await connection.query(`select * from receita where id = ${id}`)
   return receita_atualizada[0]
}

export async function seleciona_receita_model(id){
    const [receita, fields] = await connection.query(`select * from receita where id = ${id}`)
    return receita[0]
}

export async function seleciona_todas_receitas_usuario_model(id_usuario){

    try {
        const [result, fields] = await connection.query(`select * from receita where id_usuario=${id_usuario};`); 
        return result;
    } catch (error) {
        console.log(error)
    }
}

export async function seleciona_curtidas_receitas_usuario_model(id_usuario){

    try {
        const [result, fields] = await connection.query(`select SUM(curtida) AS 'curtida' from receita where id_usuario=${id_usuario};`); 
        return result;
    } catch (error) {
        console.log(error)
    }
}
