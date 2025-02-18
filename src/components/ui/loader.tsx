import React from "react";

const Loader = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 mx-auto container">
      {Array.from({ length: 12 }).map((_, index) => (
        <div key={index} className="flex flex-col gap-4">
          {/* Thumbnail */}
          <div className="w-full h-60 bg-gray-300 animate-pulse rounded-lg"></div>

          {/* Video Info */}
          <div className="flex gap-4">
            {/* Channel Icon */}
            <div className="w-12 h-12 bg-gray-300 animate-pulse rounded-full"></div>

            {/* Text Info */}
            <div className="flex flex-col gap-2 w-full">
              {/* Title */}
              <div className="w-3/4 h-4 bg-gray-300 animate-pulse rounded"></div>

              {/* Channel Name */}
              <div className="w-1/2 h-3 bg-gray-300 animate-pulse rounded"></div>

              {/* Metadata */}
              <div className="w-1/3 h-3 bg-gray-300 animate-pulse rounded"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Loader;
