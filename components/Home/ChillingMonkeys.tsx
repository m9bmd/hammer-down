import React from "react";
import chillingMonkeys from "../../public/monkey_chilling.png";
import Image from "next/image";
const ChillingMonkeys = () => {
  return (
    <div>
      <Image width={300} height={300} src={chillingMonkeys} alt="chilling monkeys"/>
    </div>
  );
};

export default ChillingMonkeys;
