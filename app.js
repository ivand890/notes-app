import chalk from "chalk";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import validator from "validator";
import getNotes from "./notes.js";

// colors for cli
const INFO_COLOR = chalk.blue;
const WARNING_COLOR = chalk.yellow.bold;
const SUSSES_COLOR = chalk.green;

// cli interface
const argv = yargs(hideBin(process.argv));

// add command
argv.command({
  command: "add",
  describe: "Add a new note.",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      type: "string",
    },
  },
  handler: (argv) => {
    console.log(INFO_COLOR("Adding new note ..."));
    console.log(`${INFO_COLOR("Title:")} ${argv.title}`);
    console.log(`${INFO_COLOR("Body:")} ${argv.body ? argv.body : ""}`);
  },
});

// remove command
argv.command({
  command: "remove",
  describe: "Remove a new note.",
  handler: () => console.log(WARNING_COLOR("Removing note ...")),
});

// read command
argv.command({
  command: "read",
  describe: "Read a note.",
  handler: () => console.log(INFO_COLOR("Reading note ...")),
});

// list command
argv.command({
  command: "list",
  describe: "List all notes.",
  handler: () => console.log(INFO_COLOR("Listing notes ...")),
});

argv.parse();
//console.log(argv.argv);
