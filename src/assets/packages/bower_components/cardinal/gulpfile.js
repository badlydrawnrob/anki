// Load dependencies
var browserSync = require('browser-sync')
    browserSyncReload = browserSync.reload,
    del = require('del'),
    gulp = require('gulp'),
    gulpLoadPlugins = require('gulp-load-plugins'),
    plugins = gulpLoadPlugins();

// Set browser support for gulp-autoprefixer
var browserSupport = [
  'last 2 versions',
  'Android >= 4.2',
  'Chrome >= 25',
  'Firefox >= 19',
  'ie >= 9',
  'iOS >= 6',
  'Opera >= 12.1',
  'Safari >= 6'
];

// Set paths
var paths = {
  css: {
    dir: './',
    main: './cardinal.css',
    all: './*.css'
  },
  less: {
    dir: './',
    main: './cardinal.less',
    all: './**/*.less'
  }
};

// Set banner
var pkg = require('./package.json'),
    banner = ['/*! <%= pkg.name %> v<%= pkg.version %> | <%= pkg.license %> License | <%= pkg.homepage %> */\n'];

// Error handler
var onError = function(err) {
  plugins.util.beep(); // Trigger a system beep
  plugins.util.log(
    plugins.util.colors.underline(plugins.util.colors.red('ERROR:'))
    + ' '
    + plugins.util.colors.cyan(err.plugin)
    + ' - '
    + err.message
  ); // Log a readable error message
};

// Clean (gulp clean)
gulp.task('clean', function(cb) {
  del([paths.css.dir], cb);
});

// Styles (gulp styles)
gulp.task('styles', function() {
  return gulp.src([
    paths.less.main
  ])
  .pipe(plugins.plumber({
    errorHandler: onError
  }))
  .pipe(plugins.sourcemaps.init({
    loadMaps: true
  }))
  .pipe(plugins.less())
  .pipe(plugins.autoprefixer({
    browsers: browserSupport
  }))
  .pipe(plugins.header(banner, { pkg: pkg }))
  .pipe(plugins.sourcemaps.write("./"))
  .pipe(gulp.dest(paths.css.dir))
  .pipe(plugins.csscomb())
  .pipe(plugins.size({
    gzip: false,
    showFiles: true,
    title:'unminified css'
  }))
  .pipe(plugins.minifyCss({
    shorthandCompacting: false,
    processImport: false
  }))
  .pipe(plugins.size({
    gzip: false,
    showFiles: true,
    title:'minified css'
  }))
  .pipe(plugins.size({
    gzip: true,
    showFiles: true,
    title:'minified css'
  }))
  .pipe(plugins.rename({
    suffix: '.min'
  }))
  .pipe(gulp.dest(paths.css.dir))
  .pipe(browserSyncReload({
    stream: true
  }));
});

// Browser Sync (gulp browser-sync)
gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: "./"
    }
  });
});

// Reload all Browsers
gulp.task('bs-reload', function () {
    browserSyncReload();
});

// Default (gulp)
gulp.task('default', ['styles', 'browser-sync'], function() {
  gulp.watch(paths.less.all, ['styles']);
  gulp.watch('*.html', ['bs-reload']);
});
