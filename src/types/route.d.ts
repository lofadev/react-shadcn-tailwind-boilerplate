import { PropsWithChildren } from 'react';

export type TRoute = {
  path: string;
  component: React.ComponentType;
  layout: FC<{ children: PropsWithChildren }>;
};
