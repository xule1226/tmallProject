const gulp = require("gulp");
const connect = require("gulp-connect");
const sass = require("gulp-sass");
const babel = require("gulp-babel");
const sourcemaps = require("gulp-sourcemaps");

gulp.task("html", done => {
  gulp
    .src("*.html")
    .pipe(gulp.dest("dist"))
    .pipe(connect.reload());
  done();
});
gulp.task("sass", done => {
  gulp
    .src("res/sass/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compact" }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
  done();
});
gulp.task("img", done => {
  gulp.src("res/img/**").pipe(gulp.dest("dist/img"));
  done();
});
gulp.task("babel", done => {
  gulp
    .src("res/js/*.js")
    .pipe(babel({ presets: ["@babel/env"] }))
    .pipe(gulp.dest("dist/js"))
    .pipe(connect.reload());
  done();
});
gulp.task("libs", done => {
  gulp.src("res/libs/*.js").pipe(gulp.dest("dist/libs"));
  done();
});
gulp.task("server", done => {
  connect.server({
    root: "dist",
    livereload: true
  });
  done();
});

gulp.task("watch", done => {
  gulp.watch("*.html", gulp.series("html"));
  gulp.watch("res/sass/*.scss", gulp.series("sass"));
  gulp.watch("res/js/*.js", gulp.series("babel"));
  gulp.watch("res/libs/*.js", gulp.series("libs"));
  gulp.watch("img/**", gulp.series("img"));
  done();
});

gulp.task("default", gulp.parallel("server", "watch","sass","img",'babel','libs'));
