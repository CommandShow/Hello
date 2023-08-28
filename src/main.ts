import { green } from "color";

const name = Deno.args.join(" ");
console.log("Hello", green(name));
