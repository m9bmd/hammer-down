import Image from "next/image";
import React from "react";
import chillDog from "../../public/chill-dog.png";
const Footer = () => {
  return (
    <div className="relative  flex justify-center pb-6">
      {/* <Image
      priority={true}
        src={
          "https://res.cloudinary.com/duseu6urj/image/upload/f_auto,q_auto/v1/hammer%20down/fw7gvejncmvdixgckven"
        }
        width={300}
        height={300}
        alt="dog chilling with drink"
        title="character design by Antonay Studio"
        className=""
      /> */}
      <p className="text-xs text-muted-foreground">for my lady</p>
    </div>
  );
};

export default Footer;
