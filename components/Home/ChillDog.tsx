import Image from "next/image";
import React from "react";
import chillDog from "../../public/chill-dog.png";
const Footer = () => {
  return (
    <div className="flex items-center justify-center flex-col  relative pb-6">
      <Image
        src={chillDog}
        width={300}
        height={300}
        alt="dog chilling with drink"
        className=""
      />
      <p className="text-xs text-primary">for my lady</p>
    </div>
  );
};

export default Footer;
