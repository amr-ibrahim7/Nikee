import type { FC } from "react";

interface IconProps {
  Icon: JSX.Element;
  Name: string;
  Color: string;
}

const Icon: FC<IconProps> = ({ Icon, Color, Name }) => {
  return (
    <div className="my-3 flex w-[150px] flex-col items-center justify-center py-2 transition-all duration-300 hover:bg-base-100 hover:bg-opacity-70 hover:shadow-sm">
      <div className={`text-5xl ${Color}`}>{Icon}</div>
      <div className="state-value text-[18px] font-normal">{Name}</div>
    </div>
  );
};

export default Icon;
