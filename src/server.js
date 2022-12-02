import express from "express";
import cors from "cors";
import routes from "./routes";

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}`));
