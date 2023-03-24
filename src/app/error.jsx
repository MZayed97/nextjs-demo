"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="text-center mt-6">
      <h2>somthing went wrong</h2>
      <button className="hover:text-amber-500" onClick={()=>reset()}>try agian</button>
    </div>
  );
}
