const express = require('express');
const app = express();

// Ruta principal que retorna la lista de tareas en formato JSON
app.get('/tasks', (req, res) => {
  const tasks = [
    {
      id: 1,
      description: 'Hacer la compra',
      completed: false
    },
    {
      id: 2,
      description: 'Lavar el coche',
      completed: true
    },
    {
      id: 3,
      description: 'Pagar las facturas',
      completed: false
    }
  ];

  res.json(tasks);
});

// Puerto en el que se ejecutará el servidor
const port = 3000;

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
const express = require('express');
const app = express();

// Ruta principal que retorna la lista de tareas en formato JSON
app.get('/tasks', (req, res) => {
  const tasks = [
    {
      id: 1,
      description: 'Hacer la compra',
      completed: false
    },
    {
      id: 2,
      description: 'Lavar el coche',
      completed: true
    },
    {
      id: 3,
      description: 'Pagar las facturas',
      completed: false
    }
  ];

  res.json(tasks);
});

// Puerto en el que se ejecutará el servidor
const port = 3000;

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
