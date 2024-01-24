import { rejects } from "assert";
import {connection} from "../server.js"
import { resolve } from "path";

export async function seleciona_todos_usuarios_model(){
    return new Promise((resolve, rejects)=>{
        connection.query('select * from usuario;', (erro, result)=>{
            resolve(result);
        });
    })
}

export async function criar_usuario(){
    return new Promise((resolve, rejects)=>{
        connection.query('insert into usuario values ();', (erro, result)=>{
            resolve(result);
        });
    })
}