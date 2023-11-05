const express = require('express');
const connectDB = require('./config/db');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv').config();
const path = require('path');
const {
  notFoundErrorHandler,
  defaultErrorHandler,
} = require('./middlewares/errorHandler');
const loginRouter = require('./router/loginRoute');
const friendsRoute = require('./router/friendRoute');
const messageRoute = require('./router/messageRoute');
const cors = require('cors');

const port = process.env.PORT || 8000;

// connect to database
connectDB();

// init app
const app = express();

// cors allow
app.use(
  cors({
    origin: 'https://test-ts4k.onrender.com',
    credentials: true,
  })
);

app.use(function (req, res, next) {
  //content-type
  const acceptHeader = req.get('Accept');
  if (acceptHeader && acceptHeader.includes('application/json')) {
    res.header('Content-Type', 'application/json;charset=UTF-8');
  }
  //
  res.header('Access-Control-Allow-Credentials', true);
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

// response header

//
app.use(express.json());

app.use(
  express.urlencoded({
    extended: false,
  })
);

// cookie parser
app.use(cookieParser(process.env.COOKIE_SECRET));

// route
app.use('/api/', loginRouter);
app.use('/api/friend', friendsRoute);
app.use('/api/message', messageRoute);

app.use(express.static(path.join(__dirname, '../client', 'build')));
//static or public route
app.get('*', (req, res) => {
  res.header('Content-Type', 'text/html;charset=UTF-8');
  res.sendFile(path.join(__dirname, '../client', 'build', 'index.html'));
});

// 404 handler
app.use(notFoundErrorHandler);
// default error handler
app.use(defaultErrorHandler);

const server = app.listen(port, () => {
  console.log(`server listening at port ${port}`);
});
