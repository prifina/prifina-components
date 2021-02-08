import React from "react";
import { ThemeProvider, Text, theme } from "@blend-ui/core";

const BlendTest = () => {
  return (
    <ThemeProvider theme={theme}>
      <Text>This is Blend Text Component</Text>
    </ThemeProvider>
  );
};

export default BlendTest;
