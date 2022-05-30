const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Mark Washburn',
  authorAddress: 'mark@mrwconsulting.tech',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: '@mrwconsulting/iac-delivery',
  repositoryUrl: 'https://github.com/mrwconsulting/iac-delivery.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
  python: {
    distName: 'iac-delivery',
    module: 'iac_delivery',
  },
});
project.gitignore.addPatterns('.venv/');
project.synth();