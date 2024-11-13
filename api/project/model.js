const db = require('../../data/dbConfig'); 

const getAllProjects = async () => {
  const projects = await db('projects');
  return projects.map(project => ({
    ...project,
    project_completed: !!project.project_completed,  
  }));
};

const addProject = async (project) => {
  const [newProject] = await db('projects').insert(project, ['*']);
  return {
    ...newProject,
    project_completed: !!newProject.project_completed,  
  };
};

module.exports = { getAllProjects, addProject };
