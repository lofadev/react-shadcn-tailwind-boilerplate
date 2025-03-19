import React, { PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';

const PageWrapper: React.FC<PropsWithChildren & React.ComponentProps<'section'>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <section className={cn(className, 'container mx-auto px-4')} {...props}>
      {children}
    </section>
  );
};

export default PageWrapper;
