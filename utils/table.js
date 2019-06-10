const table = new (require("terminal-table"))();
const padding = require("./padding");

table.push(padding(["Pid", "Name", "Priority", "Started"], 1));
const tbl = items => {
  items.forEach(item => {
    table.push(padding(item, 1));
  });
  console.log("" + table + "\n");
};

module.exports = tbl;
