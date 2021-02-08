import React from "react";
import { theme as defaultTheme, useTheme, ThemeProvider } from "@blend-ui/core";

export default { title: "ThemeTest" };

export const themeTest = () => {
  console.log(defaultTheme);
  const theme = useTheme();
  console.log(theme);

  return <div>Theme Testing</div>;
};
/*
themeTest.story = {
  name: "Theme Test",
};
*/

themeTest.story = {
  name: "Theme Test",
  decorators: [
    (Story) => {
      return (
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      );
    },
  ],
};
