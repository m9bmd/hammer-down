import Image from "next/image";
import React from "react";
import chillDog from "../../public/chill-dog.png";
const Footer = () => {
  return (
    <div className="relative flex flex-col items-center justify-center pb-6 pt-24">
      <Image
      priority={true}
        src={
          "https://res.cloudinary.com/duseu6urj/image/upload/f_auto,q_auto/v1/hammer%20down/fw7gvejncmvdixgckven"
        }
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
