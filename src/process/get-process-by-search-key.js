const si = require("systeminformation");
const term = require("terminal-kit").terminal;
const program = require("commander");
const table = require("../../utils/table");

const getProcessBySearchKey = () => {
  si.processes(data => {
    let list = data.list;

    const key = program.search;

    list = list.filter(item =>
      Object.values(item)
        .map(el => el.toString().includes(key))
        .includes(true)
    );
    term.green(
      "Showing " +
        (list.length < program.limit ? list.length : program.limit) +
        " out of " +
        list.length +
        " results.\n"
    );
    if (program.limit) {
      const limit = parseInt(program.limit);
      list = list.slice(0, limit);
    }

    list = list.map(item => [item.pid, item.name, item.priority, item.started]);
    table(list);
  });
};

module.exports = getProcessBySearchKey;