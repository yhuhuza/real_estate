import gulp from "gulp";
import { path } from "./gulp/path.js";
import { copy } from "./gulp/tasks/copy.js";
import { deleteFolder } from './gulp/tasks/clean.js';
import { html } from './gulp/tasks/html.js';

global.app = {
    path: path,
    gulp: gulp,
}

function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
}

const mainTasks = gulp.parallel(copy, html);

const dev = gulp.series(deleteFolder, mainTasks, watcher);

gulp.task('default', dev);