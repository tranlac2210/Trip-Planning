const express = require('express');
const bodyParser = require('body-parser');
const db = require('../server/src/services/db.service');
const tripsRouter = require('../server/src/routes/trips.route')
const groupsRouter = require('./src/routes/groups.route');
const usersRouter = require('../server/src/routes/users.route')

const PORT = process.env.PORT || 3001;

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (req, res) => {
  res.json({ message: 'Hello from server!' });
});

// app.use(Router);
app.use('/users', usersRouter);
app.use('/trips', tripsRouter);
app.use('/groups', groupsRouter);

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });

  return;
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
