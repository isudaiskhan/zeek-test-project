"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const HelpCenter = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/dashboard/help-center/faq");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <></>;
};

export default HelpCenter;
