import Image from "next/image";
import React from "react";

const SunflowerImage = () => {
  return (
    <div className="flex h-full w-full items-center justify-center bg-background">
      <Image
        priority={true}
        loading="eager"
        src={
          "https://res.cloudinary.com/duseu6urj/image/upload/f_auto,q_auto/v1/hammer%20down/nr42nnxkygmzjun3nffu"
        }
        width={275}
        height={275}
        title="character design from Anton Studios"
        alt="chill sunflower resting on ground by Anton Studios"
        className="z-40"
      />
    </div>
  );
};

export default SunflowerImage;
