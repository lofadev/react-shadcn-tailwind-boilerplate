const LoadingIndicator = () => {
  return (
    <div className="flex-center h-screen">
      <div className="border-foreground absolute size-12 animate-spin rounded-md border-4 border-t-4"></div>
    </div>
  );
};

export default LoadingIndicator;
