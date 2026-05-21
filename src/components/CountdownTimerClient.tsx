"use client";

import dynamic from "next/dynamic";

const CountdownTimer = dynamic(() => import("@/components/CountdownTimer"), {
  ssr: false,
});

export default CountdownTimer;
