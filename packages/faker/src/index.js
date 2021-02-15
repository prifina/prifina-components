import { Helpers, FakerObjects, getModuleName, getInfo } from "./Faker";
const Faker = { getModuleName, getInfo, ...Helpers, ...FakerObjects };
export default Faker;
