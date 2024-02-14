import { rejects } from "assert";
import {connection} from "../server.js"
import { resolve } from "path";

export async function admin_deletar_postagem_model(id_receita){
    
    try {
        const [result, fields] = await connection.query(`delete from receita where id=${id_receita};`);

        return result;
    } catch (error) {  
        console.log(error)
    }
}