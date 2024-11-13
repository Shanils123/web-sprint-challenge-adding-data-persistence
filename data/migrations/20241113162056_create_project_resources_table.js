exports.up = function(knex) {
    return knex.schema.createTable('project_resources', table => {
      table.increments('id'); // Optional primary key
      table.integer('project_id') // Foreign key to projects
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('projects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      table.integer('resource_id') // Foreign key to resources
        .unsigned()
        .notNullable()
        .references('resource_id')
        .inTable('resources')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('project_resources');
  };
  