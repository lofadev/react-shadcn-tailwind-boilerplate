const LoadingIndicator = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="border-foreground absolute h-12 w-12 animate-spin rounded-md border-4 border-t-4"></div>
    </div>
  );
};

export default LoadingIndicator;
