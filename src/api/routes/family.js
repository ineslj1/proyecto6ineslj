const { isAdmin } = require("../../middlewares/auth");
const { getFamilyById, getFamily, postFamily, putFamily, deleteFamily } = require("../controllers/family.js");


const familyRouter = require("express").Router();

familyRouter.get("/:id", getFamilyById);
familyRouter.get("/", getFamily);
familyRouter.post("/", [isAdmin], postFamily);
familyRouter.put("/:id", [isAdmin], putFamily);
familyRouter.delete("/:id", [isAdmin], deleteFamily);

module.exports = familyRouter;