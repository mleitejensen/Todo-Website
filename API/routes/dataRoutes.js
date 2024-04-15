const { Router } = require('express');
const router = Router()
const { getList, createPost, deletePost } = require("../controllers/dataController")
const {requireAuth} = require("../middleware/requireAuth")

router.use(requireAuth)

router.get("/list", getList)
router.post("/post", createPost)
router.delete("/delete", deletePost)

module.exports = router