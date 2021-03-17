import axios from "axios";
import {
  createRequires,
  createRemoteComponent,
} from "@paciolan/remote-component";

import { resolve } from "./remote-component.config.js";

const fetcher = (url) => axios.get(url).then((request) => request.data);
const requires = createRequires(resolve);

//export const RemoteComponent = createRemoteComponent({ requires });
export const RemoteComponent = createRemoteComponent({ requires, fetcher });
