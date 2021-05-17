const router = require("express").Router();
const jwt = require("jsonwebtoken");

const { privateKey, pin } = require("../utils/config.json");

router.post("/", (req, res) => {
  const { name, password } = req.body;

  if (password === pin) {
    const payload = {
      name: name,
    };

    jwt.sign(
      payload,
      privateKey,
      {
        expiresIn: "24h",
      },
      (err, token) => {
        if (err) throw err;
        res.status(200).json({ token: token });
        res.setHeader("Content-Type", "application/json");
        res.setHeader("auth-token", token);
      }
    );
  }
});

module.exports = router;
