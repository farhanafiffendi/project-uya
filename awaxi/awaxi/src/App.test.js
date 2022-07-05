import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { Font } from "@react-pdf/renderer";
import "@fontsource/roboto"

import RobotoRegular from "./Fonts/Roboto/Roboto-Regular.ttf";
import RobotoBold from "./Fonts/Roboto/Roboto-Medium.ttf";

import Routing from "./Routing";
import theme from "./theme";
import Logger from "./Services/error-handling/Logger";

function App() {
  registerFont();
  return (
    <Logger>
      <ThemeProvider theme={theme}>
        <Routing />
      </ThemeProvider>
    </Logger>
  );
}

const registerFont = () => {
  Font.register({
    family: "Roboto",
    fonts: [{ src: RobotoRegular }, { src: RobotoBold, fontWeight: "bold" }],
  });
};

export default App;