const si = require("systeminformation");
const term = require("terminal-kit").terminal;
const program = require("commander");
const table = require("../../utils/table");

const getAllProcess = () => {
  si.processes(data => {
    let list = data.list;
    const showSize = list.length < program.limit ? list.length : program.limit;
    term.green(
      "Showing " + showSize + " out of " + list.length + " results.\n\n"
    );
    if (program.limit) {
      const limit = parseInt(program.limit);
      list = data.list.slice(0, limit);
    }
    list = list.map(item => [item.pid, item.name, item.priority, item.started]);
    table(list);
  });
};

module.exports = getAllProcess;
