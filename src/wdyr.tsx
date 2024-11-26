import React from "react";
import whyDidYouRender from "@welldone-software/why-did-you-render";

console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === "development") {
  console.log("tracking");
  whyDidYouRender(React, {
    onlyLogs: true,
    titleColor: "green",
    diffNameColor: "aqua",
    trackAllPureComponents: true,
  });
}
