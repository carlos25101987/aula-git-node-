/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const bcrypt = require('bcrypt');
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('alunos').del()
  await knex('alunos').insert([
    {matricula: '444',
      nome:'carlos henrique monteiro',
    email:'carlos@gato.com',
    turma:'p',
    sexo:'j',
    telefone:'84898785525',
    endereco:'rua borboletas',
    responsavel:'sandoval monteiro oliveira'},
    {matricula: '44',
    nome:'carlos henrique f',
    email:'carlos@get.com',
    turma:'a',
    sexo:'g',
    telefone:'84898785524',
    endereco:'rua das borbas',
    responsavel:'sandoval monteiro chico'},
    {
      matricula: '42',
      nome:'carlos henrique b',
    email:'carlos@getmax.com',
    turma:'g',
    sexo:'k',
    telefone:'848987855256',
    endereco:'rua das botas',
    responsavel:'sandoval monteiro jante'}




  ]);
};
