const fs = require('fs');
const util = require('util');
const postcss = require('postcss');

const { plugins } = require('./postcss.config.js');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const readAndTransformCSS = async (input, output) => {
  const inputCSS = await readFile(input, 'utf8');
  const { css: outputCSS } = await postcss(plugins).process(inputCSS);
  await writeFile(output, outputCSS, 'utf8');
};

readAndTransformCSS('input.css', 'output.css');
