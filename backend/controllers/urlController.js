const {nanoid} = require("nanoid");
const Url = require('../models/urlModel');
const createURL = async (req, res) => {
  const { originalUrl } = req.body;
  const shortUrl = nanoid(10);
  
  try {
    const newUrl = await Url.create({ originalUrl, shortUrl });
    res.status(201).json(newUrl);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}
const getURL = async (req, res) => {
  const { shortUrl } = req.params;

  try {
    const url = await Url.findOne({ shortUrl });
    if (!url) {
      return res.status(404).json({ message: "URL not found" });
    }
    res.json({ originalUrl: url.originalUrl });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
const getAllURLs = async (req, res) => {
  try {
    const urls = await Url.find({});
    return res.json(urls);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = {
  createURL,
  getURL,
  getAllURLs
};