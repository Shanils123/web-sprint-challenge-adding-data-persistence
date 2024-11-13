// build your `/api/projects` router here
const express = require('express');
const Projects = require('./model');
const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const projects = await Projects.getAllProjects();
    res.json(projects);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const project = await Projects.addProject(req.body);
    res.status(201).json(project);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
