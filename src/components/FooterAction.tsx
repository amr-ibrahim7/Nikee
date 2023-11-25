import type { FC } from "react";

const FooterAction: FC = () => {
  return (
    <div className="mx-auto my-16 flex h-[30vh] w-full max-w-2xl flex-col items-center justify-center">
      <div className="mb-8 space-y-2 text-center">
        <h2 className="text-3xl font-bold md:text-2xl">
          Subscribe to our newsletter to get updates to our lastest collections
        </h2>
        <p className="text-lg text-gray-500">
          et 20% off on your frist order just by subcribing to our newsletter
        </p>
      </div>
      <div className="flex w-full justify-center space-x-1">
        <input
          type="text"
          placeholder="Enter Your Email"
          className="input input-bordered w-full max-w-md rounded-md"
        />
        <button className="btn rounded-md">Subscribe</button>
      </div>
    </div>
  );
};

export default FooterAction;
