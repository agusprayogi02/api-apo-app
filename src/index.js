import express from "express";
import cors from "cors";
import dbInit from "./db/init";

const PORT = process.env.PORT || 3000;

dbInit();

export const get = () => {
  const app = express();

  // Config server
  app.use(express.json());
  app.use(cors);
  app.use(express.urlencoded({ extended: true }));

  app.get("/", async (req, res) => {
    return res.status(200).send("Berhasil Connect kedalam api!");
  });

  return app;
};

export const start = () => {
  const app = get();
  try {
    app.listen(PORT, () => {
      console.log("listening on port " + PORT);
    });
  } catch (error) {
    console.log("Error : " + error.message);
  }
};

start();
