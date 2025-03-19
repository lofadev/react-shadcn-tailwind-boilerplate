import { FC, PropsWithChildren } from 'react';

import { Loader2 } from 'lucide-react';

interface ISpin {
  loading?: boolean;
}

export const Spin: FC<ISpin & PropsWithChildren> = ({ loading = false, children }) => {
  return (
    <>
      {loading && (
        <div className="absolute flex h-full w-full transform items-center justify-center bg-white/50">
          <Loader2 className="animate-spin" />
        </div>
      )}
      {children}
    </>
  );
};
