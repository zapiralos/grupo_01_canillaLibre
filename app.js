var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
<<<<<<< HEAD
=======

// routes
var indexRouter = require("./routes/index");
const authRouter = require("./routes/auth"); //rutas /auth /Registro
>>>>>>> c62bbf891510457a13fd231df97d768a23857317

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
<<<<<<< HEAD

// ************ Route System require and use() ************
const indexRouter = require("./routes/index");
const productsRouter = require("./routes/products"); // Rutas /products
const methodOverride = require("method-override"); // Para poder usar los métodos PUT y DELETE
=======
>>>>>>> c62bbf891510457a13fd231df97d768a23857317

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
<<<<<<< HEAD
app.use(methodOverride("_method")); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE

app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/products", productsRouter);
=======

// archivos estaticos
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/auth", authRouter);
>>>>>>> c62bbf891510457a13fd231df97d768a23857317

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
