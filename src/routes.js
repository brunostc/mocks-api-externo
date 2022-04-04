import express from "express";
import QuickValidation from "./controllers/QuickValidationController";
const routes = express();

const quickvalidation = new QuickValidation();
//
routes.post("/peoplev2", quickvalidation.index);
routes.post("/peoplev2/config", quickvalidation.config);

export default routes;
