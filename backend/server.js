const express = require("express");

const loginRoute = require("./middlewares/LoginRoute");
const auth = require("./middlewares/auth");

const app = express();

const main = () => {
  const PORT = 8080 || process.env.PORT;

  app.use(express.json());

  app.get("/", (_, res) => {
    res.send("API working!").json({ message: "Api Working 🚀" });
  });

  app.use("/auth", loginRoute);

  app.listen(PORT, () => {
    console.log(`[Status] Server started in ${PORT}`);
  });
};

main();
