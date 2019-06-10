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

// "pid": 19484,
// "parentPid": 39884,
// "name": "WMIC.exe",
// "pcpu": 0.000019252274391500584,
// "pcpuu": 0.000009626137195750292,
// "pcpus": 0.000009626137195750292,
// "pmem": 0.12853321319498087,
// "priority": 8,
// "mem_vsz": 2372,
// "mem_rss": 10636,
// "nice": 0,
// "started": "2019-06-10 21:30:58",
// "state": "unknown",
// "tty": "",
// "user": "",
// "command": "C:\\Windows\\system32\\wbem\\wmic.exe  process get /value"
