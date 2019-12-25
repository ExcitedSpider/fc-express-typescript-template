import { Server } from '@webserverless/fc-express';
import express from 'express';

const app = express();
app.all('*', (req, res) => {
  res.send('Hello serverless with TypeScript & Express5!');
});

const server = new Server(app);

// http trigger entry
module.exports.handler = (req, res, context) => {
  server.httpProxy(req, res, context);
};

// api gateway entry
// module.exports.handler = function(event, context, callback) {
//   server.proxy(event, context, callback);
// };
