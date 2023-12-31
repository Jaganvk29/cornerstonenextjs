const info = require('./example-info.json');

module.exports = function buildExampleMarkdown(names, exampleBasePaths) {
  let markdownResult = '';

  const { examplesByCategory, categories, exampleDescriptions } = info;

  Object.keys(categories).forEach((categoryId) => {
    const category = categories[categoryId];
    const examples = examplesByCategory[categoryId];

    if (!examples) {
      return;
    }

    markdownResult += `
### ${category.description}

    `;

    markdownResult += `
| Example    | Description |
| -------    | ----------- |
    `;

    Object.keys(examples).forEach((exampleId, index) => {
      const example = examplesByCategory[categoryId][exampleId];
      const { name, description } = example;
      // const examplePath = exampleBasePaths[index]

      const exampleLink = `[${name}](pathname:///live-examples/${exampleId}.html)`;

      markdownResult += `| ${exampleLink} | ${description} |\n`;
    });
  });

  return `---
id: examples
title: Examples
---

<!--
  NOTE: This file is autogenerated! DO NOT EDIT OR COMMIT IT
-->

${markdownResult}
  `;
};
