#!/usr/bin/env node

// Modules
const term = require("terminal-kit").terminal;
const program = require("commander");
const si = require("systeminformation");

// Utils
const table = require("./utils/table");
const log = require("./utils/log");

program
  .version("0.1.0")
  .option("-g, --get [type]", "Fetch selected type of information")
  .option("-p, --pid [processId]", "Get process by id")
  .option("-a, --all", "Get all process")
  .option("-l, --limit [length]", "Limited Data")
  .option("-s, --search [key]", "Search in Process List")
  .parse(process.argv);

term.bold.red("\nsysinf ")("System Information View and Search\n\n");

if (program.get === "process") {
  if (program.pid) {
    require("./src/process/get-process-by-id")(program.pid);
  } else if (program.all) {
    require("./src/process/get-all-process")();
  } else if (program.search) {
    require("./src/process/get-process-by-search-key")();
  }
}
