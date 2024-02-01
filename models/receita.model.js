import { connection } from "../server.js";

export async function seleciona_todos_receita_model(){
    return new Promise((resolve, rejects)=>{
        connection.query('select * from receita;', (erro, result)=>{
            resolve(result);
        });
    })
}