const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const EventProvider = require('./events/EventProvider');

const router = require('./routes/router');

const app = express();

/**
 * Llevar el registro del inicio del servicio
 */
const eventProvider = new EventProvider();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', router);

module.exports = app;
