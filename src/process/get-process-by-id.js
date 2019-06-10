const si = require("systeminformation");
const table = require("../../utils/table");
const log = require("../../utils/log");

const getProcessById = id => {
  const inputPid = parseInt(id);
  si.processes(data => {
    let list = data.list;
    const item = list.find(item => item.pid === inputPid);
    if (item) {
      table([[item.pid, item.name, item.priority, item.started]]);
    } else {
      log("Process " + inputPid + " id not found");
    }
  });
};

module.exports = getProcessById;
