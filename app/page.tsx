import Footer from "@/components/Home/ChillDog";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "@/components/ui/button";
const page = () => {
  return (
    <div className="px-10">
      <div className="flex flex-col items-center space-y-4 pt-28">
        <Image
          priority={true}
          src={
            "https://res.cloudinary.com/duseu6urj/image/upload/f_auto,q_auto/v1/hammer%20down/nr42nnxkygmzjun3nffu"
          }
          width={300}
          height={300}
          alt="chill sunflower resting on ground"
          className="rounded-full border-2 border-dashed border-primary/60"
        />
        <h1 className="w-[324px] text-pretty text-center text-primary">
          Sup Homie?
          <br /> Long time no see!
        </h1>
        <Link
          href={"/blogs"}
          className={buttonVariants({ variant: "default" })}
        >
          Lets go
        </Link>
      </div>
      {/* <RecentBlogs /> */}
      <Footer />
    </div>
  );
};

export default page;
// import React from "react";
// import { buttonVariants } from "@/components/ui/button";
// import Image from "next/image";

// import Footer from "@/components/Home/ChillDog";
// import Link from "next/link";

// export const home = () => {
//   return (
//     <div className="px-10">
//       <div className="flex flex-col items-center space-y-4 pt-28">
//         <Image
//           priority={true}
//           src={
//             "https://res.cloudinary.com/duseu6urj/image/upload/f_auto,q_auto/v1/hammer%20down/nr42nnxkygmzjun3nffu"
//           }
//           width={300}
//           height={300}
//           alt="chill sunflower resting on ground"
//           className="rounded-full border-2 border-dashed border-primary/60"
//         />
//         <h1 className="w-[324px] text-pretty text-center text-primary">
//           Sup Homie?
//           <br /> Long time no see!
//           <br />
//           Check what other's are upto.
//         </h1>
//         <Link
//           href={"/blogs"}
//           className={buttonVariants({ variant: "default" })}
//         >
//           Let's go
//         </Link>
//       </div>
//       {/* <RecentBlogs /> */}
//       <Footer />
//     </div>
//   );
// };
// export default home;
