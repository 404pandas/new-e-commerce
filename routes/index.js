const router = require("express").Router();
//  /api/
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.use((req, res) => {
  res.send(
    "<h1>Route not found! Please view the documentation at https://github.com/404pandas/new-e-commerce for all available routes!</h1>"
  );
});

module.exports = router;
