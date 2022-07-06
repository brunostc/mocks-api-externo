import express from "express";
import QuickValidation from "./controllers/QuickValidationController";
import Foxbit from "./controllers/FoxbitController";
const routes = express();

const foxbit = new Foxbit();

const quickvalidation = new QuickValidation();
//
routes.post("/peoplev2", quickvalidation.index);
routes.post("/peoplev2/config", quickvalidation.config);
routes.post("/peoplev2/listdocs", quickvalidation.listdocs);
routes.post("/sub_member", foxbit.sub_member);
routes.get("/sub_members", foxbit.sub_members);

export default routes;
