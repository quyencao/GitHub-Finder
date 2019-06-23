import dev from "./env.dev";
import prod from "./env.prod";

let env = dev;

if (process.env.NODE_ENV === "production") {
  env = prod;
}

export default env;
