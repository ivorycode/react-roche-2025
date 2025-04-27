const express = require('express');
const util = require('util');

const router = express.Router();

const todoStorage = new Map();

router.all('/*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, xx-jba-client-id');
  // res.header('Access-Control-Max-Age', 60);


  const jbaClientId = req.header('xx-jba-client-id');
  req.jbaClientId = jbaClientId;

  if (!todoStorage.get(jbaClientId)){
    todoStorage.set(jbaClientId, {nextId: 3, todos:[ { id: 1, title: "Learn Angular", completed: true }, { id: 2, title: "Learn React", completed: false }]});
  }

  next();
});

router.get('/', function (req, res) {
  res.status(200).send("API endpoint running at http://localhost:3456/todos");
});

router.get('/todos', function (req, res) {

  const todos = todoStorage.get(req.jbaClientId).todos;

  const completed = req.param("completed");
  console.log('Completed:' + completed);
  let result;
  if (completed == 0) {
    result = todos.filter(t => t.completed === false);
  }
  else if (completed == 1) {
    result = todos.filter(t => t.completed === true);
  }
  else {
    result = todos;
  }
  console.log(result);
  //setTimeout(() => res.status(201).json({data: result}), 4000);
  res.status(200).json({ data: result }); // Wrap array in a 'data' property for security: See: http://stackoverflow.com/questions/3503102/what-are-top-level-json-arrays-and-why-are-they-a-security-risk
});

router.get('/todos/:id', function (req, res) {



  const todos = todoStorage.get(req.jbaClientId).todos;

  var id = req.param("id");

  var index = todos.findIndex(function (e) {
    return e.id == id
  }); // id is a string!

  if (index !== -1) {
    res.status(200).json({ data: todos[index] });
  }
  else {
    res.status(500).send('No todo with id: ' + id);
  }

});

router.post('/todos', function (req, res) {

  const todos = todoStorage.get(req.jbaClientId).todos;

  if (!req.is('json')) {
    res.status(415).send('Payload must be JSON');
  }
  console.log(util.inspect(req.body));

  var newTodo = req.body;
  newTodo.id = todoStorage.get(req.jbaClientId).nextId;
  todos.push(newTodo);

  todoStorage.get(req.jbaClientId).nextId++;

  console.log(util.inspect(todos));

  res.status(201).json({ data: newTodo });
  //setTimeout(() => res.status(201).json({data: newTodo}), 2000);
  //res.status(500).json(newRating); // return an error to see how the client behaves...
});

router.put('/todos/:id', function (req, res) {

  const todos = todoStorage.get(req.jbaClientId).todos;

  var id = req.param("id");
  var updatedTodo = req.body;

  var index = todos.findIndex(function (e) {
    return e.id == id
  }); // id is a string!

  if (index !== -1) {
    todos[index].title = updatedTodo.title;
    todos[index].completed = updatedTodo.completed;
    res.status(204).send();
  }
  else {
    res.status(500).send('No todo with id: ' + id);
  }

});

router.delete('/todos/:id', function (req, res) {

  const todos = todoStorage.get(req.jbaClientId).todos;

  var id = req.param("id");

  var index = todos.findIndex(function (e) {
    return e.id == id
  }); // id is a string!

  if (index !== -1) {
    todos.splice(index, 1);
    res.status(204).send();
  }
  else {
    res.status(500).send('No todo with id: ' + id);
  }
});


module.exports = router;