import 'zone.js/dist/zone-node';
import 'reflect-metadata';

import { renderModuleFactory } from '@angular/platform-server';
import { enableProdMode } from '@angular/core';

import * as express from 'express';
import { join } from 'path';
import { readFileSync } from 'fs';
import * as gzip from 'compression';

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Express server
const app = express();

const PORT = process.env.PORT || 8000;
const DIST_FOLDER = join(process.cwd(), 'dist');

// Our index.html we'll use as our template
const template = readFileSync(
  join(DIST_FOLDER, 'browser', 'index.html')
).toString();

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
// const {
//   AppServerModuleNgFactory,
//   LAZY_MODULE_MAP
// } = require('./dist/server/main.bundle');
const {
  AppServerModuleNgFactory,
  LAZY_MODULE_MAP
} = require(join(DIST_FOLDER, 'server', 'main.bundle'));

// Express Engine
import { ngExpressEngine } from '@nguniversal/express-engine';
// Import module map for lazy loading
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

// Compress all resources
app.use(gzip());

// Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
app.engine(
  'html',
  ngExpressEngine({
    bootstrap: AppServerModuleNgFactory,
    providers: [provideModuleMap(LAZY_MODULE_MAP)]
  })
);

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));

/* - Example Express Rest API endpoints -
  app.get('/api/**', (req, res) => { });
*/

// Server static files from /browser
app.get(
  '*.*',
  express.static(join(DIST_FOLDER, 'browser'), {
    maxAge: '1h'
  })
);

// ALl regular routes use the Universal engine
app.get('*', (req, res) => {
  console.log('==============================');
  console.log('=         SERVER HIT         =');
  console.log('==============================');
  res.render('index', { req, res });
});

// Start up the Node server
app.listen(PORT, () => {
  console.log('* ------------------------------------------------------------------------------ *');
  console.log(`* > Node Express server listening on http://localhost:${PORT}                    *`);
  console.log('* ------------------------------------------------------------------------------ *');
  console.log('* If above port is not `8000`, change the api end point in `environment.prod.ts` *');
  console.log('* to reflect the new port. Otherwise, api requests won\'t work on the server      *');
  console.log('* ------------------------------------------------------------------------------ *');
});
