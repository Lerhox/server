"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const met_pago_controller_1 = require("../controllers/met_pago.controller");
const router = (0, express_1.Router)();
router.get('/', met_pago_controller_1.getMet_pago);
exports.default = router;
