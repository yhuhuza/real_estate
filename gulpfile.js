import gulp from "gulp";
import { path } from "./gulp/path.js";
import { copy } from "./gulp/tasks/copy.js";
import { deleteFolder } from './gulp/tasks/clean.js';
import { html } from './gulp/tasks/html.js';
import { plugins } from './gulp/tasks/plugins.js';

global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins,
}

function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
}

const dev = gulp.series(deleteFolder, copy, html, watcher);

gulp.task('default', dev);