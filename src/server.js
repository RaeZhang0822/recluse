import * as sapper from '@sapper/server';
import compression from 'compression';
import fs from 'fs';
import { createServer } from 'https';
import polka from 'polka';
import sirv from 'sirv';
const { NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';
const httpsOption = {
  key: fs.readFileSync('./https/recluse.online.key'),
  cert: fs.readFileSync('./https/recluse.online.pem'),
};
const { handler } = polka({}) // You can also use Express
  .use(compression({ threshold: 0 }), sirv('static', { dev }), sapper.middleware());

createServer(httpsOption, handler).listen('3000', (err) => {
  if (err) console.log('error', err);
});
