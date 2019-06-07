const express = require('express');
const Project = require('./projectsDB');

const router = express.Router();

router.get('/', (req, res) => {
  Project.get()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res.status(500).json({ message: 'internal server error', error: err });
    });
});

router.post('/', (req, res) => {
  Project.add(req.body)
    .then(data => {
      res.status(201).json({ message: 'project successfully added' });
    })
    .catch(err => {
      res.status(500).json({ message: 'internal server error', error: err });
    });
});

router.get('/:id', (req, res) => {
  Project.getById(req.params.id)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      res.status(500).json({ message: 'internal server error', error: err });
    });
});

router.post('/actions', (req, res) => {
  Project.addAction(req.body)
    .then(action => {
      res.status(201).json({ message: 'successfully added action' });
    })
    .catch(err => {
      res.status(500).json({ message: 'internal server error', error: err });
    });
});

router.get('/:id/actions', (req, res) => {
  Project.getProjectActions(req.params.id)
    .then(projects => {
      console.log(projects);
      res.status(200).json(projects);
    })
    .catch(err => {
      res.status(500).json({ message: 'internal server error', error: err });
    });
});
module.exports = router;
