var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const db = require('./config/database')
const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS
const dbName = process.env.DB_NAME
db(`mongodb+srv://${dbUser}:${dbPass}@cluster0.sbwct.gcp.mongodb.net/${dbName}?retryWrites=true&w=majority`)

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

const teste = require('./routes/teste')
app.use('/teste', teste)

const curso = require('./routes/curso')
app.use('/curso', curso)

const professor = require('./routes/professor')
app.use('/professor', professor)

const sala_aula = require('./routes/sala_aula')
app.use('/sala-aula', sala_aula)

const turma = require('./routes/turma')
app.use('/turma', turma)

/* projeto FOOD NOW*/

const parceiro = require('./routes/parceiro')
app.use('/parceiro', parceiro)

const cliente = require('./routes/cliente')
app.use('/cliente', cliente)

const formapag = require('./routes/formapag')
app.use('/formapag', formapag)

const produto = require('./routes/produto')
app.use('/produto', produto)

const pedido = require('./routes/pedido')
app.use('/pedido', pedido)

module.exports = app;