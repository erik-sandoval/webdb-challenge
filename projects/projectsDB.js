const db = require('../data/dbConfig');

module.exports = {
  get,
  getById,
  add,
  addAction,
  getProjectActions
};

function get() {
  return db('projects');
}

function getById(id) {
  return db('projects')
    .where({ id })
    .first();
}

function add(project) {
  return db('projects').insert(project);
}

function addAction(action) {
  return db('actions').insert(project);
}

function getProjectActions(id) {
  return db('projects').innerJoin('actions', function() {
    this.on('projects.id', '=', 'actions.project_id');
  });
}
