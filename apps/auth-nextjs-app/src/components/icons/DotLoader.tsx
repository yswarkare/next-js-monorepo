const DotLoader = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <span className="loading loading-dots loading-lg text-info"></span>
      </div>
    </div>
  );
}

export default DotLoader;
