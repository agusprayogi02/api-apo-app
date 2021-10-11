import express, { Application, Request, Response } from "express";
const cors = require("cors");

const PORT = process.env.PORT || 3000;

export const get = () => {
  const app: Application = express();

  // Config server
  app.use(express.json());
  app.use(cors);
  app.use(express.urlencoded({ extended: true }));

  app.get("/", async (req: Request, res: Response): Promise<Response> => {
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
  } catch (error: any) {
    console.log("Error : " + error.message);
  }
};

start();
