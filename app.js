/*
 * Author: Muhassin Babu MM
 * Created Date: Monday November 22nd 2021
 * Version : 1.0.0
 * Product : Server script.
 */
'use strict'

const express = require('express');
require('dotenv').config()
var createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const bodyParser = require('body-parser');


var indexRouter = require('./src/routes/index');
var userRouter = require('./src/routes/user');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'hbs');


app.use(bodyParser.json())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'src/public')));
app.use(cors());
app.options('*', cors());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

app.use('/', indexRouter);
app.use('/', userRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');

});

module.exports = app;
