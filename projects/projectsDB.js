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
  return db('actions').insert(action);
}

function getProjectActions(id) {
  return db('projects')
    .where({ id })
    .first()
    .then(project => {
      return db('actions')
        .where('project_id', id)
        .then(actions => {
          console.log(actions);
          return {
            ...project,
            actions
          };
        });
    });
}
