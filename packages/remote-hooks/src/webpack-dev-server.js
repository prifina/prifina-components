/**
 * webpack-dev-server entry point for debugging.
 * This file is not bundled with the library during the build process.
 */
import React from "react";
import ReactDOM from "react-dom";

//import { PrifinaProvider } from "@prifina/hooks";

import LocalComponent from "./index.js";
import { PrifinaContext } from "./Provider";

const node = document.getElementById("app");

const App = (props) => <LocalComponent {...props} />;

ReactDOM.render(<App stage={"dev"} Context={PrifinaContext} />, node);
