import express from 'express'
const router = express.Router()

//Login Page
router.get("/login", (req, res) => {
  res.render("login", { title: "Login Page" });
});

//Register Page
router.get("/register", (req, res) => {
  res.render("register", { title: "register Page" });
});

export default router