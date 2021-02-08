import React from "react";

import BlendTest, { ComponentTest } from "../src";
export default { title: "Hooks" };

export const hooks = () => <ComponentTest />;
hooks.story = {
  name: "Hooks",
};

export const hooks2 = () => <BlendTest />;
hooks2.story = {
  name: "Blend Text",
};
