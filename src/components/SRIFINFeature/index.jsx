import React from "react";
import { Text, Heading, Img } from "./..";

export default function SRIFINFeature({ technologyOne = "images/img_rocket.svg", ...props }) {
  return (
    <div {...props}>
      <Img src={technologyOne} alt="technology_one" className="h-[37px] w-[37px]" />
      <div className="flex flex-col w-[76%]">
        <Heading size="md" as="h1">
          Technology
        </Heading>
        <Text as="p" className="!text-gray-500 !leading-6">
          Harnessing the power of Technology to deliver better customer experience
        </Text>
      </div>
    </div>
  );
}
