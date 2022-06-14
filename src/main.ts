import { green } from "./deps.ts";

const name = Deno.args.join(" ");
console.log("Hello", green(name));
