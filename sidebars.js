/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  mySidebar: [
    'intro',
    {
      type: 'category',
      label: 'Tutorial',
      items: [
        'tutorial/learning-latex',
        'tutorial/initialize',
        'tutorial/kiwi.toml',
        'tutorial/templates',
        'tutorial/new',
        'tutorial/build',
        'tutorial/next-steps',
      ],
    },
    'tips',
  ],
};
