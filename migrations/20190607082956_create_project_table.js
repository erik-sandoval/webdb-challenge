exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function(table) {
    table.increments();
    table.string('name').notNullable();
    table.string('description')
    table.boolean('completed')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects');
};