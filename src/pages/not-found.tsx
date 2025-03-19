import PageWrapper from '@/components/page-wrapper';

const NotFound = () => {
  return (
    <PageWrapper className="flex h-full flex-col items-center justify-center">
      <span className="text-3xl">404 |</span>
      <span className="text-4xl font-bold">Page not found</span>
    </PageWrapper>
  );
};

export default NotFound;
