var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

//config mongoose
const mongoose = require("mongoose");
require("./models/student");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/user");
var courseRouter = require("./routes/course");
var scheduleRouter = require("./routes/schedule");
var examRouter = require("./routes/exam");
var newsRouter = require("./routes/news");
var internshipRouter = require("./routes/internship");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//connect database
mongoose
  // .connect("mongodb://localhost:27017/ASM", {
  .connect("mongodb+srv://root:root@MyFPL.jmzfm2w.mongodb.net/MyFPL", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(">>>>>>>>>> DB Connected!!!!!!"))
  .catch((err) => console.log(">>>>>>>>>> DB Err: ", err));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/course", courseRouter);
app.use("/schedule", scheduleRouter);
app.use("/exam", examRouter);
app.use("/news", newsRouter);
app.use("/internship", internshipRouter);

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
