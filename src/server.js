const express = require("express");
const tasksRoutes = require("./routes/tasks");
const app = express();
app.use(express.json());
app.use("/tasks", tasksRoutes);
app.use((err, req, res, next) => {
  if (err && err.errors) {
    res.status(400).json({ message: err.errors[0].message });
    return;
  }
  next(err);
});
app.listen(3001, () => console.log("Server running on port 3001"));
