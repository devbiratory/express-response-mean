const utils = require("../utils/utils");
module.exports = app => {
  return app.get("/stats", (req, res) => {
    setTimeout(() => {
      res.status(200).json({
        success: true,
        data: { id: 1, stats: "some stats here" }
      });
    }, utils.getRandomReqTimeout());
  });
};
