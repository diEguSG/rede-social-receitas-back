import { connection } from "../server.js";

export async function seleciona_todos_receita_model(){
    return new Promise((resolve, rejects)=>{
        connection.query('select * from receita;', (erro, result)=>{
            resolve(result);
        });
    })
}
export async function criar_receitas_model(titulo, descricao, imagem, id_categoria, id_usuario){
    const data = new Date()
    return new Promise((resolve, rejects)=>{
        connection.query(`insert into receita (id,titulo, descricao, imagem, data_criacao, id_categoria, id_usuario) values (null, '${titulo}', '${descricao}', '${imagem}', '${data}', ${id_categoria}, ${id_usuario});`, (erro, result)=>{
            console.log(erro)
            resolve(result);
        });
    })
}
