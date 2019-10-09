import { createRequire } from "module";

const require = createRequire(import.meta.url);

const account = require("./account.graphql");
const group = require("./group.graphql");
const role = require("./role.graphql");

export default [account, group, role];