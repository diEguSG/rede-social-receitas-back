import { seleciona_todas_receitas_usuario_controller } from "../controller/receita.controller.js";
import { connection } from "../server.js";

export async function seleciona_todos_receita_model(){
    
    try {
        const [result, fields] = await connection.query('select * from receita;')
        return result;

    } catch (error) {
        console.log(error)
    }   
}
export async function criar_receitas_model(titulo, descricao, imagem, id_categoria, id_usuario){

    try {
        const data = new Date()

        const [result, fields] = await connection.query(`insert into receita (titulo, descricao, imagem, data_criacao, id_categoria, id_usuario) values ('${titulo}', '${descricao}', '${imagem}', '${data}', '${id_categoria}', ${id_usuario});`)            
        return result;

    } catch (error) {
        console.log(error)
    }
}

export async function seleciona_todas_receitas_usuario_model(id_usuario){

    try {
        const [result, fields] = await connection.query(`select * from receita where id_usuario=${id_usuario};`); 
        return result;
    } catch (error) {
        console.log(error)
    }
}
