import Image from "next/image";
import React from "react";

function RocketImage() {
  return (
    <div className="w-full py-12 ">
      <Image
        src="/two-paperplane.png"
        alt="Paper Plane"
        width={0}
        height={200}
        className="w-full h-[200px] object-cover"
        sizes="100vw"
      />
    </div>
  );
}

export default RocketImage;
