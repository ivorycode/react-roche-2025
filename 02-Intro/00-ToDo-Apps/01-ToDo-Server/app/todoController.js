const messageStore = require('./todoStore');

function getToDos (req, res) {
  const todos = messageStore.getToDos(req.sessionID);

  const viewData = {
    todos
  };

  res.render('index', viewData);
}

function getDoneToDos (req, res) {
  const doneToDos = messageStore.getDoneToDos(req.sessionID);

  const viewData = {
    doneToDos
  };

  res.render('done', viewData);
}

function addToDo (req, res) {
  messageStore.addToDo(req.sessionID, req.body.title);

  res.redirect('/todo1');
}

function completeToDo (req, res) {
  messageStore.completeToDo(req.sessionID, req.body.title);

  res.redirect('/todo1');
}

function removeToDo (req, res) {
  messageStore.removeToDo(req.sessionID, req.body.title);

  res.redirect('/todo1/done');
}


module.exports = {getToDos, getDoneToDos, addToDo, completeToDo, removeToDo};
