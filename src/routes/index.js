import express from "express";
import provinceRouter from "./province.router.js";
import districtRouter from "./district.router.js";

const routes = express.Router();

routes.use("/province", provinceRouter);
routes.use("/district", districtRouter);
export default routes;
