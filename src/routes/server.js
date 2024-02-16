const express = require("express");
const tasksRoutes = require("./routes/tasks");
const app = express();
app.use(express.json());
app.use("/tasks", tasksRoutes);
app.listen(3001, () => console.log("Server running on port 3001"));
