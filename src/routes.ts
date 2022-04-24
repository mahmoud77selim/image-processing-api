import { Application, Router } from 'express';
import { IndexerKit } from './modules/IndexerKit';
import { ResizerKit } from './modules/ResizerKit';

const _routes: [string, Router][] = [
  ['/', IndexerKit],
  ['/', ResizerKit]
];

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const routes = (app: Application) => {
  _routes.forEach((route) => {
    const [url, controller] = route;
    app.use(url, controller);
  });
};
