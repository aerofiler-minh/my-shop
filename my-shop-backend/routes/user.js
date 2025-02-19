const express = require("express");
const router = express.Router();
const { requireSignIn, isAuth, isAdmin } = require("../controllers/auth");
const { userById, readUser, updateUser } = require("../controllers/user");

router.get("/secret/:userId", requireSignIn, isAuth, isAdmin, (req, res) => {
  res.json({ user: req.profile });
});

router.get("/user/:userId", requireSignIn, isAuth, readUser);
router.put("/user/update/:userId", requireSignIn, isAuth, updateUser);

router.param("userId", userById);

module.exports = router;
