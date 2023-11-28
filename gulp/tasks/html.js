import fileInclude from 'gulp-file-include';
import webpHtmlNosvg from "gulp-webp-html-nosvg";
import versionNumber from 'gulp-version-number';

export const html = () => {
    return app.gulp.src(app.path.src.html)
        .pipe(fileInclude({
            prefix: '@@',
            basepath: '@file',
          }))
        .pipe(app.plugins.replace(/@img\//g, 'assets/img/'))
        .pipe(webpHtmlNosvg())
        .pipe(
            versionNumber({
              value: '%DT%',
              append: {
                key: '_v',
                cover: 0,
              },
              to: [
                'css',
                'Js',
              ],
              output: {
                file: 'gulp/version.json',
              },
            })
        )
        .pipe(app.gulp.dest(app.path.build.html));
}