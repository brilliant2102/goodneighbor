const express = require("express");
const router = express.Router();

const controller = require("../Controller/MemberController");
router.get("/", controller.member);

module.exports = router;
