import * as nodePath from 'path';

const rootFolder = nodePath.basename(nodePath.resolve());
const outputFolder = './dist';
const sourceFolder = './src'; 

export const path = {
    build: {
      html: `${outputFolder}/`,
      files: `${outputFolder}/`,
    },
    src: {
      files: `${sourceFolder}/**/*.*`,
      html: `${sourceFolder}/*.html`,
    },
    watch: {
      html: `${sourceFolder}/**/*.html`,
      files: `${sourceFolder}/**/*.*`,
    },
    clean: outputFolder,
    buildFolder: outputFolder,
    srcFolder: sourceFolder,
    rootFolder: rootFolder,
}