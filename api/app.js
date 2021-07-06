require('dotenv').config();
require('./mongo');

const express = require('express');
const cors = require('cors');

// Routes
const usersRouter = require('./routes/users');
const plotsRouter = require('./routes/plots');

// Middlewares
const errorHandler = require('./middlewares/errorHandler');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static('../app/build'));

const PORT = process.env.PORT || 3006;

app.use('/api/users', usersRouter);
app.use('/api/plots', plotsRouter);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
