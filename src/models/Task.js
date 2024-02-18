const jsonfile = require("jsonfile");
const file = "db.json";

const Task = {
  create: (description) => {
    jsonfile.readFile(file, (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      data.tasks.push({ description });
      jsonfile.writeFile(file, data, { spaces: 2 }, (err) => {
        if (err) {
          console.error(err);
        }
      });
    });
  },
  findAll: () => {
    return new Promise((resolve, reject) => {
      jsonfile.readFile(file, (err, data) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(data.tasks);
      });
    });
  },
};

module.exports = Task;

