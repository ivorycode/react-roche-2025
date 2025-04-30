import {createRoute} from '@tanstack/react-router';
import {rootRoute} from '../root.route.ts';

export const detailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/detail/$todoId',
}).lazy(() => import('./detail.lazy.ts').then(m => m.Route));