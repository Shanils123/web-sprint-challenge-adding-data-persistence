const db = require('../../data/dbConfig');

const getAllTasks = async () => {
  const tasks = await db('tasks')
    .join('projects', 'tasks.project_id', 'projects.project_id')
    .select(
      'tasks.task_id',
      'tasks.task_description',
      'tasks.task_notes',
      'tasks.task_completed',
      'projects.project_name',
      'projects.project_description'
    );
  return tasks.map(task => ({
    ...task,
    task_completed: !!task.task_completed,
  }));
};

const addTask = async (task) => {
  const [newTask] = await db('tasks').insert(task, ['*']);
  return {
    ...newTask,
    task_completed: !!newTask.task_completed,
  };
};

module.exports = { getAllTasks, addTask };
