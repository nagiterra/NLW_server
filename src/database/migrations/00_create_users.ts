import Knext from 'knex';

export async function up( knex: Knext){
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('avatar').notNullable();
        table.string('whatsapp').notNullable();
        table.string('bio').notNullable();
    });
}


export async function down( knex: Knext){
    return knex.schema.dropTable('users');
}