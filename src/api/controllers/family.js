const Family = require("../models/family.js");

const getFamily = async (req, res, next) => {
  try {
    const families = await Family.find().populate("instruments");
    return res.status(200).json(families);
  } catch (error) {
    return res.status(400).json("Request Error");
  }
}

const getFamilyById = async (req, res, next) => {
  try {
    const { id } = req.params
    const families = await Family.findById(id);
    return res.status(200).json(families);
  } catch (error) {
    return res.status(400).json("Request Error");
  }
}
const postFamily = async (req, res, next) => {
  try {
    const newFamily = new Family(req.body);
    const familySaved = await newFamily.save()
    return res.status(201).json(familySaved);
  } catch (error) {
    return res.status(400).json("Request Error");
  }
}
const putFamily = async (req, res, next) => {
  try {
    const { id } = req.params;
    const oldFamily = await Family.findById(id);
    const newFamily = new Family(req.body);
    newFamily._id = id;
    newFamily.instruments = [...oldFamily.instruments, ...newFamily.instruments];
    const familyUpdated = await Family.findByIdAndUpdate(id, newFamily, { new: true, })
    return res.status(200).json(familyUpdated)
  } catch (error) {
    return res.status(400).json("Request Error");
  }
}
const deleteFamily = async (req, res, next) => {
  try {
    const { id } = req.params;
    const familyDeleted = await Family.findByIdAndDelete(id)
    return res.status(200).json(familyDeleted);
  } catch (error) {
    return res.status(400).json("Request Error");
  }
}
module.exports = {
  getFamily, getFamilyById, postFamily, putFamily, deleteFamily
}