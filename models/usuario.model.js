import { rejects } from "assert";
import {connection} from "../server.js"
import { resolve } from "path";

export async function seleciona_usuario_login_model(dados){
    
    try {

        const [result, fields] = await connection.query(`select * from usuario where email="${dados.email}" and senha="${dados.senha}"`);

        return result;
        
    } catch (error) {
        console.log(error)
    }       
}

export async function criar_usuario_model(dados){

    try {

        const [result, field] = await connection.query(`select * from usuario where email="${dados.email}";`)

        if(result.length == 1){
            return false;
        }

        if(result.length == 0){
            const [result, fields] = await connection.query(`insert into usuario(nome, email, senha, imagem_perfil) values ("${dados.nome}", "${dados.email}", "${dados.senha}", "${dados.imagem_perfil}");`);
            return result;
        }

    } catch (error) {
        console.log(error)
    }
}

export async function atualizar_usuario_model(dados, id_usuario){
    try {
        const [dados_usuario, fields] = await connection.query(`select * from usuario where id=${id_usuario};`)

        const dados_novos = {
            ...dados_usuario[0],
            ...dados
        }

        const [result, field] = await connection.query(`update usuario set nome="${dados_novos.nome}", email="${dados_novos.email}", telefone="${dados_novos.telefone}", senha="${dados_novos.senha}", id_tipo_usuario=${dados_novos.id_tipo_usuario}, id_situacao_usuario=${dados_novos.id_situacao_usuario} where id=${id_usuario};`)
        return result;

    } catch (error) {
        console.log(error)
    }
}

export async function seleciona_dados_usuario_model(id_usuario){

    try {
        const [result, fields] = await connection.query(`select * from usuario where id = ${id_usuario};`);
        return result;
    } catch (error) {
        console.log(error)
    }

}