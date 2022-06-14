import { green } from "$deno/fmt/colors.ts";

const name = Deno.args.join(" ");
console.log("Hello", green(name));
