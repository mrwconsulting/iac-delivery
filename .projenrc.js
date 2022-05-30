const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Mark Washburn',
  authorAddress: 'mark@mrwconsulting.tech',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: '@mrwconsulting/iac-delivery',
  repositoryUrl: 'https://github.com/mrwconsulting/iac-delivery.git',
  packageName: '@mrwconsulting/iac-delivery',
  description: 'Continuous Integration / Continuous Delivery for CDK Applications',
  python: {
    distName: 'iac-delivery',
    module: 'iac_delivery',
  },
  // deps: [],                /* Runtime dependencies of this module. */
  // devDeps: [],             /* Build dependencies for this module. */
});
project.gitignore.addPatterns('.venv/');
project.synth();