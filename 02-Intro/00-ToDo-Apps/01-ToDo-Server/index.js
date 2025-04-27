console.log('Starting server ...');

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('connect-flash');
const todoController = require('./app/todoController');
const apiRoutes = require('./apiRoutes');

const PORT = process.env.PORT || 3000;

const app = express();

setUpInfrastructure(app);
// enableLiveReload(app);

// Server-Side MVC and Routing
const router = express.Router();
router.get('/', todoController.getToDos);
router.get('/done', todoController.getDoneToDos);
router.post('/', todoController.addToDo);
router.post('/completeToDo', todoController.completeToDo);
router.post('/removeToDo', todoController.removeToDo);
app.use('/todo1/', router);

// Set up routes for REST-API
app.use('/api', apiRoutes);

// todo3 app uses HTML5 Routing, we need to configure a fallback url
app.get('/03-todo/*', function (req, res) {
  res.sendFile(__dirname + '/public/03-todo/index.html');
});
app.get('/11-todo/*', function (req, res) {
  res.sendFile(__dirname + '/public/11-todo/index.html');
});
app.get('/12-todo/*', function (req, res) {
  res.sendFile(__dirname + '/public/12-todo/index.html');
});

// Start the server
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

function setUpInfrastructure(app) {
  // Sessions allow us to store data on visitors from request to request
  app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: true,
      cookie: { maxAge: 3600000, secure: false, httpOnly: true },
    })
  );

  app.use(flash());

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  // serves up static files from the public folder. Anything in public/ will just be served up as the file it is
  app.use(express.static(path.join(__dirname, 'public')));

  // view engine setup
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'pug');
  app.locals.pretty = true;
}

function enableLiveReload(app) {
  // enable live-reloading for development
  const reload = require('reload');
  reload(app);
  app.use(
    require('connect-inject')({
      snippet: '<script src="/reload/reload.js"></script>',
    })
  );
}
