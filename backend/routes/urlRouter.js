const express = require('express');
const { createURL, getURL, getAllURLs } = require('../controllers/urlController');
const router = express.Router();

router.post("/shorten", createURL);
router.get("/urls", getAllURLs); 
router.get("/:shortUrl", getURL);
module.exports = router;