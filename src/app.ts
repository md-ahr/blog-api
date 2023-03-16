import environment from './environments/environment';

import http from 'http';
import { AddressInfo } from 'net';
import { createServer } from './config/express';

const host = '0.0.0.0';

const { port } = environment || {};

const startServer = async () => {
  const app = await createServer();
  const server = http.createServer(app).listen({ host, port }, () => {
    const addressInfo = server.address() as AddressInfo;
    console.log(
      `SERVER READY AT http://${addressInfo.address}:${addressInfo.port}`,
    );
  });

  const signalTraps: NodeJS.Signals[] = ['SIGTERM', 'SIGINT', 'SIGUSR2'];
  signalTraps.forEach(type => {
    process.once(type, async () => {
      console.log(`process.once ${type}`);

      server.close(() => {
        console.log('HTTP SERVER CLOSED');
      });
    });
  });
};

startServer();
