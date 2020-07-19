import { Client } from "@typeit/discord";

async function run() {
  const client = new Client({
    classes: [
      `${__dirname}/*Discord.ts`, // glob string to load the classes
      `${__dirname}/*Discord.js`, // If you compile using "tsc" the file extension change to .js
    ],
    silent: false,
    variablesChar: ":",
  });

  await client.login("YOUR_TOKEN");
}

run();
