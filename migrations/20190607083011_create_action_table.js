exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', function(table) {
    table.increments();
    table
      .integer('project_id')
      .unsigned()
      .references('id')
      .inTable('projects')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    table.string('description').notNullable();
    table.string('notes');
    table.boolean('completed').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions');
};