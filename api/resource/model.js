// build your `Resource` model here
const db = require('../../data/dbConfig');

function getAllResources() {
  return db('resources');
}

async function addResource(resource) {
  const [id] = await db('resources').insert(resource);
  return db('resources').where('resource_id', id).first();
}

module.exports = { getAllResources, addResource };
