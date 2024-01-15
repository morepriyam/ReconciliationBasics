const express = require('express');
const cors = require('cors')
const app = express();
const port = 3000;

app.use(cors());


const allTodos = [
    {
      id: 1,
      title: 'Create a new project repository',
      description: 'Initialize a new Git repository for the project on GitHub.',
    },
    {
      id: 2,
      title: 'Set up project structure',
      description: 'Create the basic folder structure for the project (e.g., src, public, etc.).',
    },
    {
      id: 3,
      title: 'Install Node.js and npm',
      description: 'Ensure that Node.js and npm are installed on your development machine.',
    },
    {
      id: 4,
      title: 'Initialize a package.json file',
      description: 'Run "npm init" to create a package.json file for managing project dependencies.',
    },
    {
      id: 5,
      title: 'Install Express.js',
      description: 'Install the Express.js framework for building the backend of the application.',
    },
    {
      id: 6,
      title: 'Create a simple Express server',
      description: 'Set up a basic Express server with an endpoint for serving todos.',
    },
    {
      id: 7,
      title: 'Implement API endpoint for fetching todos',
      description: 'Create a route in Express to handle GET requests for fetching todos.',
    },
    {
      id: 8,
      title: 'Seed initial data',
      description: 'Seed the database or use a hardcoded list of todos for testing purposes.',
    },
   ];
  


function getRandomTodos() {
    const randomCount = Math.floor(Math.random() * allTodos.length) + 1;
    return allTodos.slice(0, randomCount);
  }
  

  app.get('/todos', (req, res) => {
    const randomTodos = getRandomTodos();
    res.json(randomTodos);
  });

  app.listen(port, () => {
    console.log(`Server is running at ${port}`);
  });