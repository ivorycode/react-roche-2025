const toDos = new Map();

function getToDos (clientId) {
  const clientStore = getClientStore(clientId);
  return clientStore.todos;
}

function getDoneToDos (clientId) {
  const clientStore = getClientStore(clientId);
  return clientStore.done;
}

function addToDo (clientId, message) {
  const clientStore = getClientStore(clientId);

  clientStore.todos.push(message);
}

function completeToDo (clientId, title) {
  const clientStore = getClientStore(clientId);

  clientStore.todos = clientStore.todos.filter(t => t !== title);
  clientStore.done.push(title);
}

function removeToDo(clientId, title) {
  const clientStore = getClientStore(clientId);

  clientStore.done = clientStore.done.filter(t => t !== title);
}


function getClientStore(clientId) {
  if (!toDos.get(clientId)) {
    toDos.set(clientId, {todos: [], done: []});
  }

  return toDos.get(clientId);
}


module.exports = {getToDos, getDoneToDos, addToDo, completeToDo, removeToDo};