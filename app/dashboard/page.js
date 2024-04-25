"use client";

import { useEffect } from "react";

export default function Dashboard() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://experteaseai.s3.amazonaws.com/experteaseai/scritps/bots/GermanStudy.js";

    script.onload = () => {
      const DOMContentLoadedEvent = new Event("DOMContentLoaded");
      document.dispatchEvent(DOMContentLoadedEvent);
    };

    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return <div>Dashboard page</div>;
}
