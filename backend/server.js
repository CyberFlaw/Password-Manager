const express = require("express");

const app = express();

const main = () => {
  const PORT = 8000 || process.env.PORT;

  app.use(express.json());

  app.get("/", (_, res) => {
    res.send("API working!").json({ message: "Api Working 🚀" });
  });

  app.listen(PORT, () => {
    console.log(`[Status] Server started in ${PORT}`);
  });
};

main();
