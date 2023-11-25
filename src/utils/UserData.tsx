import React from "react";

export default function UserData() {
  if (status === "loading") {
    return <div className="h-10 w-16 rounded-full bg-black" />;
  }
  if (status === "unauthenticated") {
    return <button className="btn  btn-primary">Login</button>;
  }
  return <div>UserData</div>;
}
