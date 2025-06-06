import { Suspense } from 'react';

import LoadingIndicator from './loading-indicator';

const SuspenseWrapper = ({ children }: { children: React.ReactNode }) => {
  return <Suspense fallback={<LoadingIndicator />}>{children}</Suspense>;
};

export default SuspenseWrapper;
