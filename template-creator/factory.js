import prompts from 'prompts';
import { pathOptionPrompt } from './prompts/pathOption.prompt';
import { instanceNamePrompt } from './prompts/instanceNamePrompt';
import { createTypeOptionPrompt } from './prompts/createTypeOptionPrompt';
import { fileOptionPrompt } from './prompts/fileOption.prompt';
import { folderOptionPrompt } from './prompts/folderOption.prompt';
import { overwriteFilePrompt } from './prompts/overwriteFile.prompt';
import { createTemplate, fileWalker } from './prompts/support/utils';

(async () => {
  const args = require('minimist')(process.argv.slice(2));

  const sourceFolder = args['srcDir'];

  const setOfDirectories = await new Promise(onSuccess => fileWalker(sourceFolder, onSuccess));

  const questions = [
    createTypeOptionPrompt,
    fileOptionPrompt,
    folderOptionPrompt,
    instanceNamePrompt,
    pathOptionPrompt(setOfDirectories),
    overwriteFilePrompt
  ];

  const {path, instanceName, templateFactory, canCreateFile} = await prompts(questions, {onCancel: () => true});

  if (canCreateFile !== false) {
    createTemplate({path, instanceName, templateFactory});
  }
})();
