import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import breweriesAPI from './routes/breweries';

const app = express();
const env = dotenv.config()
const uri = process.env.ATLAS_URI;

app.use(cors());
app.use(express.json());
mongoose.connect(uri, {useNewUrlParser:true, useCreateIndex:true});
const connection = mongoose.connection;
connection.once('open', ()=>{
  console.log('MongoDB connected successfully thanks to how smart Joe is! :D');
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/breweries', breweriesAPI);

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
