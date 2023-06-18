// import express
const express = require("express");

// import sequelize (ORM)
const sequelize = require("./config/connection");

// import routes
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT} at https://localhost:${PORT}`);
  });
});
