import {createPackage, Runtime} from '@shopify/loom';

import {quiltPackage} from '../../config/loom';

export default createPackage((pkg) => {
  pkg.runtimes(Runtime.Browser, Runtime.Node);
  pkg.entry({root: './src/index'});
  pkg.entry({name: 'babel', root: './src/babel-plugin'});
  pkg.entry({name: 'webpack', root: './src/webpack-parts'});
  pkg.entry({name: 'webpack-loader', root: './src/webpack-parts/loader'});
  pkg.entry({name: 'worker', root: './src/worker'});
  pkg.use(quiltPackage());
});
