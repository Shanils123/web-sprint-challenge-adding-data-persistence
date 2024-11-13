exports.up = function(knex) {
    return knex.schema.createTable('tasks', table => {
      table.increments('task_id'); // Primary key
      table.string('task_description').notNullable(); // Required
      table.string('task_notes'); // Optional
      table.integer('task_completed').defaultTo(0); // Defaults to 0 (false)
      table.integer('project_id') // Foreign key pointing to projects
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('projects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('tasks');
  };
  