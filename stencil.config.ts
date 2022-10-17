import { Config } from '@stencil/core';
// import tailwind, { PluginOpts } from 'stencil-tailwind-plugin';
// const opts = {
//   ...PluginOpts.DEFAULT,
//   debug: false,
//   stripComments: true,
// };
export const config: Config = {
  namespace: 'gitsearch',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  // plugins: [tailwind(opts)],
  // devServer: {
  //   reloadStrategy: 'pageReload',
  // },
};
