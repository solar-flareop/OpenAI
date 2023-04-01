const router = require("express").Router();
const {
  registerController,
  loginController,
  logoutController,
} = require("../controllers/authController");

// register
router.post("/register", registerController);

// login
router.post("/login", loginController);

// logout
router.post("/logout", logoutController);

module.exports = router;
