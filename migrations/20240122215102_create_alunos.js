const { table } = require("../database/conction");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTableIfNotExists('alunos', function(table){
        table.increments('id').primary()
        table.string('nome')
        table.string('email')
        table.string('turma')
        table.string('sexo')
        table.string('telefone')
        table.string('endereço')
        table.string('responsavel')



    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {

    return knex.schema.dropTable('alunos')
  
};
