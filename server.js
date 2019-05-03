const express = require("express");
const connectDB = require("./config/db");
const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json({ extended: false }));

// Set up default route params
app.use("/api/users", require("./routes/api/users"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/users", require("./routes/api/users"));

app.get("/", (req, res) => res.send("API Running!"));

app.listen(PORT, () => console.log("Server running"));
