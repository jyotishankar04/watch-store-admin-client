const PageWraperScroll = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="text-center bg-gray-100  overflow-auto h-[calc(100vh-90px)]">
      {children}
    </div>
  );
};

export default PageWraperScroll;
