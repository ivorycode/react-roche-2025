import {createLazyRoute} from '@tanstack/react-router';
import {DetailScreen} from './DetailScreen.tsx';

export const Route = createLazyRoute('/detail/$todoId')({
  component: DetailScreen,
})