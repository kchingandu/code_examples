import fs from 'fs-extra';
import path from 'path'

export const searchFilter = (input = '', choices) => {
  const loose = choices.filter(choice => {
    const match = choice.title
      .toLowerCase()
      .split("").sort().join("").replace(/(.)(?=.*\1)/gi, "")
      .match(new RegExp(`[${input.toLowerCase()}]`, 'gi')) || [];

    return match.length >= input.length;
  });

  const strict = choices.filter(choice => choice.title.toLowerCase().search(input.toLowerCase()) !== -1);

  return Promise.resolve(strict.length ? strict : loose);
};

export const createFolderPathFromSet = (setOfFolders = []) => {
  const createChoice = (path) => ({title: path, value: path});

  return setOfFolders.map(createChoice);
};

export const createTemplate = ({path, instanceName, templateFactory}) => {
  templateFactory(path, instanceName).forEach(({fileContent, pathAndName}) => {
    fs.outputFile(pathAndName, fileContent, (e) => {
      if (e) {
        console.log('Could not create template : ', e);
      } else {
        console.log('Successfully created : ', pathAndName);
      }
    });
  });
};

export const filesExists = ({templateFactory, instanceName, path}) => {
  let filesExist = 0;

  const filesData = templateFactory(path, instanceName);

  for (const {pathAndName} of filesData) {
    if (fs.pathExistsSync(pathAndName)) {
      filesExist++;
    }
  }

  return filesExist;
};


export function fileWalker(dir, done) {
  let results = [];

  fs.readdir(dir, function(err, list) {
    if (err) return done([]);

    var pending = list.length;

    if (!pending) return done(results);

    list.forEach(function(file) {
      file = path.resolve(dir, file);

      fs.stat(file, function(err, stat) {
        // If directory, execute a recursive call
        // If directory, execute a recursive call
        if (stat && stat.isDirectory()) {
          // Add directory to array [comment if you need to remove the directories from the array]
          results.push(file);

          fileWalker(file, function(res) {
            results = results.concat(res);
            if (!--pending) done(results);
          });
        } else {
          //results.push(file);

          if (!--pending) done(results);
        }
      });
    });
  });
}
