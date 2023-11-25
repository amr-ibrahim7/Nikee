"use client";
import type { FC } from "react";
import Marquee from "react-fast-marquee";
import Icon from "./Icon";
import {
  SiAdidas,
  SiAral,
  SiArgos,
  SiAtandt,
  SiBigbasket,
  SiChannel4,
  SiCoil,
  SiNike,
  SiZara,
} from "react-icons/si";

const MarqueeSwiper: FC = () => {
  return (
    <Marquee
      pauseOnHover={true}
      speed={70}
      className="my-10 rounded-xl bg-base-300 bg-opacity-30"
    >
      <Icon Icon={<SiArgos />} Name="" Color="text-black" />
      <Icon Icon={<SiNike />} Name="" Color="text-black" />
      <Icon Icon={<SiAral />} Name="" Color="text-yellow-500" />
      <Icon Icon={<SiAdidas />} Name="" Color="text-black" />
      <Icon Icon={<SiAtandt />} Name="" Color="text-blue-800" />
      <Icon Icon={<SiBigbasket />} Name="" Color="text-[#c76494]" />
      <Icon Icon={<SiCoil />} Name="" Color="text-[#44a6ad] " />
      <Icon Icon={<SiChannel4 />} Name="" Color="text-black" />
      <Icon Icon={<SiZara />} Name="" Color="text-black" />
    </Marquee>
  );
};

export default MarqueeSwiper;
