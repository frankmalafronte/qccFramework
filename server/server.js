const express = require('express');
const app = express();
const morgan = require('morgan');
const port = 4000;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/students', (req, res) => {
  const students = [
    { id: 1, firstName: 'Invoker', lastName: 'kun' },
    { id: 1, firstName: 'Life', lastName: 'Stealer' },
    { id: 1, firstName: 'Shadow', lastName: 'Fiend' }
  ];
  res.json(students);
});

app.listen(port, () => {
  console.log(`Server Started on Port ${port}`);
});
